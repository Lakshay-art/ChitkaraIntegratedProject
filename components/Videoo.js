import React from "react";
import Image from "next/image";
import axios from "axios";
import { cloud_name, server } from "../config";
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
    console.log("first");
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

  var base64data;

  const saveFrameToFFmpeg = async (public_id, name, frame, delay) => {
    //setCalled(true);
    setTimeout(async () => {
      console.log(delay);
      await axios
        .post(`${server}/api/getvideoframess`, {
          link: `http://res.cloudinary.com/${cloud_name}/pg_${frame}/${public_id}.webp`,
        })
        .then(
          async (res) => {
            console.log(res.data);
            props.ffmpeg.FS("writeFile", `c${name}`, await fetchFile(res.data));
            // const data = props.ffmpeg.FS("readFile",`c${name}`);
            // const url = URL.createObjectURL(
            //   new Blob([data.buffer], { type: "image/png" })
            // );
            // setGif(url);

            props.complete();
          },
          (err) => {
            console.log(err);
          }
        );
    }, delay);
    // props.ffmpeg.FS("writeFile", `c${name}`, await fetchFile(`http://res.cloudinary.com/lakshaythegupta/pg_${frame}/${public_id}.png`));//frame code left
    // props.complete();
  };

  useEffectOnce(() => {
    console.log("first");
    for (let i = 1; i < 30; i++) {
      saveFrameToFFmpeg(
        props.public_id,
        `output` + ("0000" + i).slice(-3) + ".webp",
        i,
        i * 1000
      );
    }
    // setArray(array)

    return () => console.log("my effect is destroying");
  });

  return (
    <>
      {console.log(props.name)}
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
