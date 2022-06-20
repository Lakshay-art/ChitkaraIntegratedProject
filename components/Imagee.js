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

  const sendToCloudinaryVideotoGif = async (base64data) => {
    //setCalled(true);
    setTimeout(async() => {
    await axios
      .post(`${server}/api/videotogif`, {
        link: base64data,
      })
      .then(
        async(res) => {
          console.log(res.data);
          props.ffmpeg.FS("writeFile", `c${props.name}`, await fetchFile(res.data));
        const data = props.ffmpeg.FS("readFile",`c${props.name}`);
        const url = URL.createObjectURL(
          new Blob([data.buffer], { type: "image/png" })
        );
        setGif(url);

         props.complete();
        },
        (err) => {
          console.log(err);
        }
      );
    }, props.delay);
  };

  const sendToCloudinaryImagetoGif = async (base64data) => {
    //setCalled(true);
  

   setTimeout(async() => {
     console.log(props.delay)
      await axios
      .post(`${server}/api/imagetogif`, {
       link: base64data,
       x:props.xaxis,
        index:props.index,
        angle:props.angle
      })
      .then(
        async(res) => {
          console.log(res.data);
          props.ffmpeg.FS("writeFile", `c${props.name}`, await fetchFile(res.data));
          if(props.name=="output029.png"){
            for (let i = 29; i < 60; i++) 
            {
              props.ffmpeg.FS("writeFile", `coutput` + ("0000" + i).slice(-3) + ".png" , await fetchFile(res.data));
              props.complete();
            }
          }
        const data = props.ffmpeg.FS("readFile",`c${props.name}`);
        const url = URL.createObjectURL(
          new Blob([data.buffer], { type: "image/png" })
        );
        setGif(url);
         props.complete();
        },
        (err) => {
          console.log(err);
        }
      );
   }, props.delay);
   
  };
  useEffectOnce( ()=> {
    let read=props.name;
    if(props.type=="imagetogif")
    read="test.png"
    const data = props.ffmpeg.FS("readFile", read);
  
    //convert to base64
    reader.readAsDataURL(new Blob([data.buffer]));
    reader.onloadend = function () {
      base64data = reader.result;
      console.log(reader);
      if(props.type=="imagetogif")
      sendToCloudinaryImagetoGif(base64data);
      else if(props.type=="videotogif"){
      sendToCloudinaryVideotoGif(base64data);
       
      }
    };
    
    // const data=ffmpeg.FS('readdir','/')
    // const url = URL.createObjectURL(
    //   new Blob([data.buffer], { type: "image/jpg" })
    // );
    // setGif(url);
    
    
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
