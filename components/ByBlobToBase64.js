import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import styles from "../styles/Upload.module.css";
import Imagee from "./Imagee";
import Image from "next/image";
import React from "react";
import axios from "axios";
import { server } from "../config";
import { BtnText, ButtonGiff } from "./Banner/Banner.styles";

const ffmpeg = createFFmpeg(
  {
    log: true,
    corePath: "/ffmpeg-core/ffmpeg-core.js",
  });

var array2 = [];
const App = (props) => {


  const [ready, setReady] = React.useState(false);
  const [array1, setArray1] = React.useState([]);
  // const [array2, setArray2] = React.useState([]);
  const [video, setVideo] = React.useState(false);
  const [convert, setConvert] = React.useState(false);
  const [gif, setGif] = React.useState(false);

  const setReady2 = React.useCallback((state) => {
    setReady(state);
  }, [ready]);
  const setVideo2 = React.useCallback((state) => {
    setVideo(state);
  }, [video]);
  const setConvert2 = React.useCallback((state) => {

    setConvert(state);
  }, [convert]);
  const setGif2 = React.useCallback((state) => {
    setGif(state);
  }, [gif]);


  React.useEffect(async () => {
    //setConvert2(false);
    //setVideo2(false);
    //setGif2(false)
    load();
    const x = 300; const angle = 290;
    let array = [];
    for (let i = 1; i < 28; i++) {
      array.push({ a: `output` + ("0000" + i).slice(-3) + ".png", x: (x - (10 * (i))), degree: (angle - (10 * i)) });
    }
    setArray1(array)
    console.log("-------------change------------")

    // for (let i = 1; i <30; i++) {
    //   array1.push({ a: "output001" + ".png",x:(x-(10*(i))),degree:(angle-(10*i))});
    // }
    console.log(props.file);
    if (props.file.length != 0) {
      setVideo2(props.file[0].file)
    }
  }, [props.file]);


  const load = async () => {
    if (ffmpeg.isLoaded()) {
      setReady2(true);
      return;
    }
    await ffmpeg.load();
    setReady2(true);
  };

  const framesfetched = async () => {
    array2.push("done");
    console.log(array2)
    console.log(array1)
    if (array2.length == array1.length) {
      await ffmpeg.run(
        "-i", "coutput%03d.png",
        "-frames:v", "30",
        "finalgif.gif"
      );

      const data = await ffmpeg.FS("readFile", `finalgif.gif`);
      const url = URL.createObjectURL(new Blob([data.buffer], { type: "image/gif" }));
      console.log(url);
      setGif2(url);
    }
  };


  const videoToGif = async () => {
    ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));
    // await ffmpeg.run('-i',"test.mp4",'-ss',"2.0",'-f',"gif","output.gif")
    //await ffmpeg.run('-i', "test.mp4", '-vn', '-acodec', 'copy','-f','mp3' ,'output.mp3')
    //await ffmpeg.run('-i', "test.png",'-f',"gif",'output.gif')
    setConvert2(false);
    setGif2(false);
    await ffmpeg.run
      (
        "-i", "test.mp4",
        "-vf", "scale=iw/1.5:ih/1.5",
        "-crf", "0",
        "output%03d.png"
      ); //output001.png
    setConvert2(true);
  };


  const ImageToGif = async () => {
    ffmpeg.FS("writeFile", "test.png", await fetchFile(video));
    // await ffmpeg.run('-i',"test.mp4",'-ss',"2.0",'-f',"gif","output.gif")
    //await ffmpeg.run('-i', "test.mp4", '-vn', '-acodec', 'copy','-f','mp3' ,'output.mp3')
    //await ffmpeg.run('-i', "test.png",'-f',"gif",'output.gif')
    setConvert2(false);
    setGif2(false);
    setConvert2(true);
  };


  return (
    <>
      { }
      {ready ? (
        <div>
          {/* {video && (
            <video
              controls
              width="auto"
              src={URL.createObjectURL(video)}
            >
              </video>
           
          )}   {console.log(video)} */}
          {/* <input className={styles.input}
            type="file" 
            onChange={(e) => setVideo(e.target.files?.item(0))}
          /> */}
        </div>
      ) : (
        <></>
      )}
      {props.type == "videotogif" && <ButtonGiff onClick={videoToGif}>Make this Gif/Video Awesome</ButtonGiff>}
      {props.type == "imagetogif" && <ButtonGiff onClick={ImageToGif}>Gif it!!</ButtonGiff>}
      <div className={styles.flex}>
        {/* {convert && <Imagee key={1} name={"output001.png"} ffmpeg={ffmpeg} complete={framesfetched}/>} */}
        {convert &&
          array1.map((data, index) => {
            console.log(data);
            return (
              <Imagee
                key={index}
                name={data.a}
                ffmpeg={ffmpeg}
                complete={framesfetched}
                type={props.type}
                xaxis={data.x} index={index} angle={data.degree}
              />
            );
          })}
      </div>

      {/* //audio
                <audio controls>
                <source src={gif} type="audio/ogg"/>
                 <source src={gif} type="audio/mpeg"/>
                Your browser does not support the audio tag.
                </audio> */}

      {gif && (
        <div className={styles.finaloutput}>
          <Image src={gif} width="auto" height="auto" unoptimized="true" /></div>
      )}
    </>
  );
};
export default App;