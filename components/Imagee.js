import React from "react";
import Image from "next/image";
import axios from "axios";
import { server } from "../config";
import { fetchFile } from "@ffmpeg/ffmpeg";
import styles from "../styles/Upload.module.css";

export const useEffectOnce = (effect) => {
  const destroyFunc = React.useRef();
  const effectCalled = React.useRef(false);
  const renderAfterCalled = React.useRef(false);
  const [val, setVal] = React.useState(0);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  React.useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true;
    }

    // this forces one render after the effect is run
    setVal((val) => val + 1);

    return () => {
      // if the comp didn't render since the useEffect was called,
      // we know it's the dummy React cycle
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, []);
};

const App = (props) => {
  const [gif, setGif] = React.useState(false);
  // const [called, setCalled] = React.useState(false);
  console.log(props.ffmpeg);

  // var base64data;
  // const getLastFrame=()=>{
  //   // var reader = new FileReader();
  //   return props.ffmpeg.FS("readFile",`coutput029.png`)
  // }

  const saveFrameToFFmpeg = async (public_id, name, x, angle, delay) => {
    props.ffmpeg.FS(
      "writeFile",
      `c${name}`,
      await fetchFile(
        `http://res.cloudinary.com/lakshaythegupta/a_${angle},fl_region_relative.no_overflow,g_faces,h_0.5,l_thug_life,w_1.0,x_${x},y_0/${public_id}.png`
      )
    );

    props.complete();
  };

  useEffectOnce(() => {
    const x = 600;
    const angle = 290;

    for (let i = 1; i < 30; i++) {
      //console.log(i)
      setTimeout(async () => {
        console.log(i * 2000);
        saveFrameToFFmpeg(
          props.public_id,
          `output` + ("0000" + i).slice(-3) + ".png",
          x - 20 * i,
          angle - 10 * i,
          i * 2000
        );
      }, i * 2000);
    }

    for (let i = 30; i < 60; i++) {
      setTimeout(async () => {
        console.log(i * 2000);
        saveFrameToFFmpeg(
          props.public_id,
          `output` + ("0000" + i).slice(-3) + ".png",
          0,
          0,
          i * 2000
        );
      }, i * 2000);
    }

    return () => console.log("my effect is destroying");
  });

  return (
    <>
      {/* {console.log(props.name)} */}
      {gif && (
        <div className={styles.finaloutput}>
          <Image
            className={styles.smallimage}
            src={gif}
            width="20px"
            height="20px"
            unoptimized="true"
          />
        </div>
      )}
    </>
  );
};

export default App;
