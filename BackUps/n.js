import { createFFmpeg,fetchFile } from "@ffmpeg/ffmpeg";
import Image from "next/image"
import React from "react";
const ffmpeg = createFFmpeg({
    log: true,
    corePath: "/ffmpeg-core/ffmpeg-core.js",
  });
     const App=()=>{
        const [ready, setReady] = React.useState(false) ;
        const [video, setVideo] = React.useState(false) ;
        const [gif, setGif] = React.useState(false) ;

        const load= async()=> 
        {
            await ffmpeg.load();
            setReady (true) ;
        }

        React.useEffect(()=>{
            load();
        },[]);

        const convertToGif=async()=>{
            ffmpeg.FS('writeFile','test.mp4',await fetchFile(video));
            await ffmpeg.run('-i',"test.mp4",'-ss',"2.0",'-f',"gif","output.gif")
           // await ffmpeg.run('-i', "test.mp4", '-vn','output.mp3')
           //await ffmpeg.run('-i', "test.mp4",'output%03d.png')
          // await ffmpeg.run('-i', "test.png",'-f',"gif",'output.gif')
            
            const data = ffmpeg.FS ('readFile','output.gif');
           
            const url= URL.createObjectURL (new Blob([data.buffer]), { type:'image/gif'})
            setGif(url)
        }
       
        return <>
        {ready ? (
            <div>
            { video && <video
            controls
            width="300"
            src={URL.createObjectURL(video)}>
            </video> }
            
            <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))}/>
            </div>
        ):<></>}
        <button onClick={convertToGif}>Convert</button>
        {
            gif && <> {console.log(gif)}
            {
               //gif
               <Image src={gif} width="300px" height="300px" unoptimized="true"/>
                
               //audio
            //    <audio controls>
            //     <source src={gif} type="audio/ogg"/>
            //     <source src={gif} type="audio/mpeg"/>
            //     Your browser does not support the audio tag.
            //     </audio>

            }
            
            </>
        }
        </>
    }
    export default App;