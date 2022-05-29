import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import styles from "../styles/Upload.module.css";
import Imagee from "./Imagee";
import Image from "next/image";
import React from "react";
import axios from "axios";
import { server } from "../config";

const ffmpeg = createFFmpeg(
{
  log: true,
  corePath: "/ffmpeg-core/ffmpeg-core.js",
});

let array1 = [];
let array2 = [];
const App = (props) => 
{

  
  const [ready, setReady] = React.useState(false);
  const [video, setVideo] = React.useState(false);
  const [convert, setConvert] = React.useState(false);
  const [gif, setGif] = React.useState(false);
  
  
  React.useEffect(async () => 
  {
    load();
    for (let i = 1; i < 5; i++) 
    {
      array1.push({ a: `output` + ("0000" + i).slice(-3) + ".png" });
    }
  }, []);


  const load = async () => 
  {
    if (ffmpeg.isLoaded()) 
    {
      setReady(true);
      return;
    }
    await ffmpeg.load();
    setReady(true);
  };

  const framesfetched = async () => 
  {
    setGif(false);
      array2.push("done");
      if (array2.length == array1.length) 
      {
          await ffmpeg.run(
            "-i", "coutput%3d.png",
            "-frames:v","30",
            "finalgif.gif"
          );
        
        const data = ffmpeg.FS("readFile",`finalgif.gif`);
        const url = URL.createObjectURL(new Blob([data.buffer],{ type: "image/gif" }));
        console.log(url);
        setGif(url);
      }
  };


  const videoToGif = async () => 
  {
    ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));
    // await ffmpeg.run('-i',"test.mp4",'-ss',"2.0",'-f',"gif","output.gif")
    //await ffmpeg.run('-i', "test.mp4", '-vn', '-acodec', 'copy','-f','mp3' ,'output.mp3')
    //await ffmpeg.run('-i', "test.png",'-f',"gif",'output.gif')
    setConvert(false);
    setGif(false);
    await ffmpeg.run
    (
      "-i","test.mp4",
      "-vf","scale=iw/1.5:ih/1.5",
      "-crf","0",
      "output%03d.png"
    ); //output001.png
    setConvert(true);
  };


  const ImageToGif = async () => 
  {
    ffmpeg.FS("writeFile", "test.png", await fetchFile(video));
    // await ffmpeg.run('-i',"test.mp4",'-ss',"2.0",'-f',"gif","output.gif")
    //await ffmpeg.run('-i', "test.mp4", '-vn', '-acodec', 'copy','-f','mp3' ,'output.mp3')
    //await ffmpeg.run('-i', "test.png",'-f',"gif",'output.gif')
    setConvert(false);
    setGif(false);
    // await ffmpeg.run(
    //   "-i","test.mp4",
    //   "-vf","scale=iw/2:ih/2",
    //   "-crf","0",
    //   "output%03d.png"
    // );
     //output001.png
    setConvert(true);
  };


  return (
    <>
      {ready ? (
        <div>
          {video && (
            <video
              controls
              width="auto"
              src={URL.createObjectURL(video)}
            >
              </video>
          )}
          <input className={styles.input}
            type="file" 
            onChange={(e) => setVideo(e.target.files?.item(0))}
          />
        </div>
      ) : (
        <></>
      )}
      {props.type=="videotogif" && <button onClick={videoToGif}>Make this Gif/Video Awesome</button>}
      {props.type=="imagetogif" && <button onClick={ImageToGif}>Gif it!!</button>}
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
        <Image src={gif} width="auto" height="auto" unoptimized="true"  />
      )}
    </>
  );
};
export default App;
