import React from "react";
import Image from "next/image";
import axios from "axios";
import { server } from "../config";
const App = (props) => {
  const [gif, setGif] = React.useState(false);
  console.log(props.ffmpeg);
  var reader = new FileReader();
  var base64data;

  const sendToCloudinary = async () => {
    await axios
      .post(`${server}/api/upload2`, {
        link: base64data,
      })
      .then(
        () => {
          console.log("first");
        },
        (err) => {
          console.log(err);
        }
      );
  };
  React.useEffect(async () => {
    const data = props.ffmpeg.FS("readFile", props.name);
    reader.readAsDataURL(new Blob([data.buffer]));
    reader.onloadend = function () {
      base64data = reader.result;
      console.log(reader);
      sendToCloudinary(base64data);
    };
    // const data=ffmpeg.FS('readdir','/')
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/png" })
    );
    setGif(url);
  }, []);
  return (
    <>
      {console.log(props.name)}
      {gif && (
        <Image src={gif} width="300px" height="300px" unoptimized="true" />
      )}
    </>
  );
};

export default App;
