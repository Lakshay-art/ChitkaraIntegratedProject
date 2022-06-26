import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import styles from "../styles/Upload.module.css";

import Videoo from "./Videoo";
import Image from "next/image";
import React, { useEffect } from "react";
import axios from "axios";
import { server } from "../config";
import { BtnText, ButtonGiff, Container, Container2, Download, FlexBox, Loader } from "./Banner/Banner.styles";
import { shadow } from "@cloudinary/url-gen/actions/effect";
import Filter from "./Filter";

const ffmpeg = createFFmpeg({
  log: true,
  corePath: "/ffmpeg-core/ffmpeg-core.js",
});

var array2 = [];
const App = (props) => {
  const [ready, setReady] = React.useState(false);
  const [array1, setArray1] = React.useState([]);
  const [loader, setLoader] = React.useState('/Assets/loader-3.gif');
  // useEffect(() => {
  //   props.file.length != 0 ? setLoader('/Assets/loader-3.gif') : setLoader('/Assets/Banner.webp')
  // })
  // const [array2, setArray2] = React.useState([]);
  const [video, setVideo] = React.useState(false);
  const [convertImage2, setConvertimg2] = React.useState();
  const [getThumbnails, setgetThumbnails] = React.useState([
    {
      secure_url: '/Assets/thug_life1.png',
    },
    {
      secure_url: '/Assets/img-13.png',
    },
    {
      secure_url: '/Assets/img-12.png',
    },
    {
      secure_url: '/Assets/img-4.png',
    },
    {
      secure_url: '/Assets/img-9.png',
    }
  ]);
  const [convertvid, setConvertvid] = React.useState();
  const [gif, setGif] = React.useState(false);
  const [active, setActive] = React.useState(true);

  const setReady2 = React.useCallback(
    (state) => {
      setReady(state);
    },
    [ready]
  );
  const tapped = () => {
    setLoader('/Assets/loader-2.gif')
  }
  const setVideo2 = React.useCallback(
    (state) => {
      setVideo(state);
    },
    [video]
  );

  const setConvertVideo = React.useCallback(
    (state) => {
      setConvertvid(state);
    },
    [convertvid]
  );
  const setGif2 = React.useCallback(
    (state) => {
      setGif(state);
    },
    [gif]
  );
  React.useEffect(async () => {
    //setConvert2(false);
    //setVideo2(false);
    //setGif2(false)

    load();
    // const x = 300;
    // const angle = 290;
    // let array = [];
    // for (let i = 1; i < 30; i++) {
    //   array.push({
    //     a: `output` + ("0000" + i).slice(-3) + ".webp",
    //     x: x - 10 * i,
    //     degree: angle - 10 * i,
    //     delay: i * 2000,
    //   });
    // }
    //  setArray1(array);
    console.log("-------------change------------");
    console.log(props.file);
    if (props.file.length != 0) {
      setVideo2(props.file[0].file);
      let base64data;
      var reader = new FileReader();

      reader.readAsDataURL(props.file[0].file);
      // await reader.readAsDataURL(new Blob([video.buffer]));
      reader.onloadend = function () {
        base64data = reader.result;
        console.log(reader);
        axios
          .post(`${server}/api/uploadimagee`, {
            link: base64data,
          })
          .then(async (res) => {
            setgetThumbnails(res.data.eager)
            setConvertimg2(res.data)
            setGif2(false);
            //setConvert2(true);
          });
      };
      array2 = [];
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
  //  const compressMov=async()=>{
  //   ffmpeg.FS("writeFile", "a.mov", await fetchFile(video));

  //   await ffmpeg.run(
  //     "-i", "a.mov",
  //      "-map","0",
  //      "-c:v","qtrle",
  //     "-c:a","copy",
  //     "-crf","20",
  //     "finalmov.mov"
  //   );
  //  // ffmpeg -i "Video Intro.avi" -map 0 -c:v png -c:a copy "Compressed.avi
  //   const data = await ffmpeg.FS("readFile",`finalmov.mov`);
  //   const url = URL.createObjectURL(new Blob([data.buffer],{ type: "video/mp4" }));
  //   console.log(url);
  //   setGif2(url);
  //  }
  const framesfetched = async () => {
    array2.push("done");
    console.log(array2);
    // console.log(array1);
    if (
      (props.type == "imagetogif" && array2.length == 49) ||
      (props.type == "videotogif" && array2.length == 29)
    ) {
      await ffmpeg.run(
        "-i",
        "coutput%03d.webp",
        "-frames:v",
        "60",
        "finalgif.gif"
      );

      const data = await ffmpeg.FS("readFile", `finalgif.gif`);
      const url = URL.createObjectURL(
        new Blob([data.buffer], { type: "image/gif" })
      );
      console.log(url);
      setGif2(url);
      array2 = [];
    }
  };

  const videoToGif = async () => {
    var reader = new FileReader();
    let base64data;
    reader.readAsDataURL(new Blob([video], { type: "image/gif" }));
    reader.onloadend = function async() {
      base64data = reader.result;
      console.log(reader);
      axios
        .post(`${server}/api/getgiffromvideoo`, {
          link: base64data,
        })
        .then((res) => {
          setConvertvid(res.data);
          setGif2(false);
        });
    };
  };

  // const ImageToGif = async () =>
  // {
  //   ffmpeg.FS("writeFile", "input.png", await fetchFile(video));
  //   // await ffmpeg.run('-i',"test.mp4",'-ss',"2.0",'-f',"gif","output.gif")
  //   //await ffmpeg.run('-i', "test.mp4", '-vn', '-acodec', 'copy','-f','mp3' ,'output.mp3')
  //   //await ffmpeg.run('-i', "test.png",'-f',"gif",'output.gif')
  //   await ffmpeg.run
  //   (
  //     "-i","input.png",
  //     "-vf","scale=1000:-1",
  //     // "-crf","20",
  //     "test.png"
  //   ); //output001.png
  //   setConvert2(false);
  //   setGif2(false);
  //   setConvert2(true);
  // };

  const ImageToGif = async () => {

  };
  { console.log('12' + gif) }
  return (
    <>
      {props.type == "videotogif" && (
        <button onClick={videoToGif}>Make this Gif/Video Awesome</button>
      )}
      {/* {props.type == "imagetogif" && (
        <button onClick={ImageToGif}>Gif it!!</button>
      )} */}
      {/* <button onClick={compressMov}>mov!</button> */}
      <div className={styles.flex}>
        {/* {convert && <Imagee key={1} name={"output001.png"} ffmpeg={ffmpeg} complete={framesfetched}/>} */}
        {/* {convert &&
          array1.map((data, index) => {
            console.log(data);
            return (
            
            );
          })} */}
        {/* {convert &&
          array1.map((data, index) => {
            console.log(data);
            return (
              <Videoo
                key={index}
                name={data.a}
                ffmpeg={ffmpeg}
                complete={framesfetched}
                type={props.type}
                xaxis={data.x} index={index} angle={data.degree}
                delay={data.delay}
              />
            );
          })} */}

        {convertvid && (
          <Videoo
            ffmpeg={ffmpeg}
            complete={framesfetched}
            public_id={convertvid}
          />
        )}
      </div>

      {gif && active && (
        <div className={styles.finaloutput2}>
          <Image
            className={styles.finalgif}
            height="500"
            width="500"
            src={gif}
            unoptimized="true"
          />
          <div onClick={() => {
            setActive(!active)
          }}>x</div>
        </div>
      )}
      {!gif && <div className={styles.finaloutput2}>
        <Image
          className={styles.finalgif}
          height="450"
          width="500"
          src={'/Assets/Banner.webp'}
        // unoptimized="true"
        />
      </div>}
      <Container >
        {console.log(getThumbnails)}{
          <Filter data={getThumbnails} image={convertImage2} ffmpeg={ffmpeg} complete={framesfetched} tapped={tapped} />
        }

      </Container>

      {console.log(`${loader}`)}

      {!gif && <div className={styles.finaloutput}>
        <Image
          className={styles.finalgif}
          height="450px"
          width="500px"
          src={loader}
        // unoptimized="true"
        />
      </div>}

      {/* //audio
                <audio controls>
                <source src={gif} type="audio/ogg"/>
                 <source src={gif} type="audio/mpeg"/>
                Your browser does not support the audio tag.
                </audio> */}


      {gif && (
        <div className={styles.finaloutput}>

          {/* <a href={`${gif}`} download='File' className={styles.anchor}>qw</a> */}

          <Image
            className={styles.finalgif}
            height="500"
            width="500"
            // src={gif}
            src={'/Assets/loader-3.gif'}

            unoptimized="true"
          />
          <Download>
            <a href={`${gif}`} download='File' className={styles.anchor}>
              <Image src="/Assets/d-1.png" height="80px" width={'80px'} />
            </a>
          </Download>
        </div>
      )

      }
      {/* 
      <div onClick={() => {
        setActive(!active)
      }}>x</div> */}



    </>
  );
};
export default App;
