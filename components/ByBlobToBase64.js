import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import styles from '../styles/Upload.module.css'
import Imagee from "./Imagee";
import React from "react";
import axios from "axios";
import { server } from "../config";
const ffmpeg = createFFmpeg({
  log: true,
  corePath: "/ffmpeg-core/ffmpeg-core.js",
});
let array1 = [];
const App = () => {
  const [ready, setReady] = React.useState(false);
  const [video, setVideo] = React.useState(false);
  const [convert, setConvert] = React.useState(false);
  //const [ffm, setFfm] = React.useState(false) ;

  const load = async () => {
    if (ffmpeg.isLoaded()){
      setReady(true);
      return;
    }
    await ffmpeg.load();
    setReady(true);
  };
  React.useEffect(async() => {
    load();
  const x=300;const angle=290;
    for (let i = 1; i <30; i++) {
      array1.push({ a: "output001" + ".png",x:(x-(10*(i))),degree:(angle-(10*i))});
    }
  //  `output` + ("0000" + i).slice(-3)
  }, []);
  // ,x:(x-(10*i)),y:(y-(10*i))
  const convertToGif = async (e) => {
    e.preventDefault();
    ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));
    // await ffmpeg.run('-i',"test.mp4",'-ss',"2.0",'-f',"gif","output.gif")
    //await ffmpeg.run('-i', "test.mp4", '-vn', '-acodec', 'copy','-f','mp3' ,'output.mp3')
    //await ffmpeg.run('-i', "test.png",'-f',"gif",'output.gif')
    setConvert(false)
    await ffmpeg.run("-i", "test.mp4","-vf","scale=iw/2:ih/2","-crf", "20" , "output%03d.png");
    console.log(ffmpeg);
    //setFfm(ffmpeg);
    setConvert(true);
  };

  return (
    <>
      {ready ? (
        <div>
          {video && (
            <video
              controls
              width="300"
              src={URL.createObjectURL(video)}
            ></video>
          )}
          {/* {console.log(array1)} */}
          <input
            type="file"
            onChange={(e) => setVideo(e.target.files?.item(0))}
          />
        </div>
      ) : (
        <></>
      )}
      <button onClick={convertToGif}>Convert</button>
      <div className={styles.flex}>
        {/* {convert && <Imagee key={1} name={"output001.png"} xaxis={'29'} ffmpeg={ffmpeg} />} */}
        {convert && array1.map((data, index) => {
          console.log(data);
           return <Imagee key={index} name={data.a} ffmpeg={ffmpeg} xaxis={data.x} index={index} angle={data.degree}/>
        })}
      </div>

      {/* <Image src={gif} width="300px" height="300px" unoptimized="true"/> */}
      {/* {console.log(gif)} */}

      {/* //audio
                <audio controls>
                <source src={gif} type="audio/ogg"/>
                 <source src={gif} type="audio/mpeg"/>
                Your browser does not support the audio tag.
                </audio> */}
    </>
  );
};
export default App;
