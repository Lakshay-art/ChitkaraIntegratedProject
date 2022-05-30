import React from "react";
import Image from "next/image";
import axios from "axios";
import { server } from "../config";
import { fetchFile } from "@ffmpeg/ffmpeg";
import styles from "../styles/Upload.module.css";

const App = (props) => {
  const [gif, setGif] = React.useState(false);
  console.log(props.ffmpeg);
  var reader = new FileReader();
  var base64data;

  const sendToCloudinaryVideotoGif = async () => {
    await axios
      .post(`${server}/api/videotogif`, {
        link: base64data,
      })
      .then(
        async(res) => {
          console.log(res.data);
          props.ffmpeg.FS("writeFile", `c${props.name}`, await fetchFile(res.data));
        // const data = props.ffmpeg.FS("readFile",`c${props.name}`);
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
  };

  const sendToCloudinaryImagetoGif = async () => {
    await axios
      .post(`${server}/api/imagetogif`, {
        link: base64data,
      })
      .then(
        async(res) => {
          console.log(res.data);
          props.ffmpeg.FS("writeFile", `c${props.name}`, await fetchFile(res.data));
        // const data = props.ffmpeg.FS("readFile",`c${props.name}`);
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
  };

  React.useEffect(async () => {
    let read=props.name;
    if(props.type=="imagetogif")
    read="test"
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
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/jpg" })
    );
    setGif(url);
  }, []);
  return (
    <>
      {console.log(props.name)}
      {gif && (
              <div className={styles.finaloutput}>
        <Image src={gif} width="60px" height="60px" unoptimized="true" /></div>
      )}
    </>
  );
};

export default App;
