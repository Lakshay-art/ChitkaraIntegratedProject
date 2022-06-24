import React from "react";
import Image from "next/image";
import axios from "axios";
import { server } from "../config";
import { fetchFile } from "@ffmpeg/ffmpeg";
import styles from "../styles/Upload.module.css";


export const useEffectOnce = ( effect )=> {

  const destroyFunc = React.useRef();
  const effectCalled = React.useRef(false);
  const renderAfterCalled = React.useRef(false);
  const [val, setVal] = React.useState(0);

  if (effectCalled.current) {
      renderAfterCalled.current = true;
  }

  React.useEffect( ()=> {

      // only execute the effect first time around
      if (!effectCalled.current) { 
        destroyFunc.current = effect();
        effectCalled.current = true;
      }

      // this forces one render after the effect is run
      setVal(val => val + 1);

      return ()=> {
        // if the comp didn't render since the useEffect was called,
        // we know it's the dummy React cycle
        if (!renderAfterCalled.current) { return; }
        if (destroyFunc.current) { destroyFunc.current(); }
      };
  }, []);
};



const App = (props) => {
  const [gif, setGif] = React.useState(false);
  // const [called, setCalled] = React.useState(false);
  console.log(props.ffmpeg);
  var reader = new FileReader();
  var base64data;

  const saveFrameToFFmpeg = async (public_id,name,delay,x,angle) => {
    //setCalled(true);
  

   setTimeout(async() => {
            
          props.ffmpeg.FS("writeFile", `c${name}`, await fetchFile(`http://res.cloudinary.com/lakshaythegupta/${public_id}.png`));
          
        const data = props.ffmpeg.FS("readFile",`c${name}`);
        // const url = URL.createObjectURL(
        //   new Blob([data.buffer], { type: "image/png" })
        // );
        // setGif(url);
         props.complete();
      
   }, props.delay);
   
  };
  useEffectOnce( ()=> {
    const x=300;const angle=290;

    for (let i = 1; i < 30; i++) 
    {
      console.log(i)
        saveFrameToFFmpeg(props.public_id, `output` + ("0000" + i).slice(-3) + ".png",i*500,(x-(10*(i))),(angle-(10*i)));
    }
  
    for (let i = 30; i < 60; i++) 
    {
      console.log(i)
        saveFrameToFFmpeg(props.public_id, `output` + ("0000" + i).slice(-3) + ".png",i*500,0,0);
    }
  
    
    return () => console.log('my effect is destroying');
});



  

  return (
    <>
      {console.log(props.name)}
      {gif && (
              <div className={styles.finaloutput}>
        <Image className={styles.smallimage} src={gif} width="20px" height="20px" unoptimized="true" /></div>
      )}
    </>
  );
};

export default App;
