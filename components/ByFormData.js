import axios from "axios";
import { Image, Transformation } from "cloudinary-react";
import { useState } from "react";
export default function (){
    const [images,setImages]=useState([]);
    const [data,setData]=useState(null);
    const PreviewImage =()=>{
            const formData= new FormData();
            formData.append('file',images);
            formData.append('upload_preset',"HelloWorld");
            const preview = async ()=>{
               try{
                    const response= await axios.post("https://api.cloudinary.com/v1_1/tarun12/image/upload",formData);
                   setData(response.data);
                    console.log(response.data);
                }
                catch(error){
                console.error(error);
                }
            }
            preview();
    }
    return <>
    <h1>
        cloudinary Image Upload By Postss
    </h1>
    <input type="file" onChange={(e)=>setImages(e.target.files[0])} />
    <button onClick={PreviewImage}>
        Upload
    </button>
    <div>
      {data &&  <Image cloudName="tarun12" publicId={`https://res.cloudinary.com/tarun12/image/upload/v1652988395/${data.public_id}`}>
    {/* <Transformation flags="region_relative" gravity="faces" height="1.0" overlay="ydqgniwljmhqqj0xwnr9" width="1.0" crop="scale" />
  <Transformation aspectRatio="1.0" crop="pad" /> */}


  <Transformation width="10" height="10" crop="limit" />

          </Image>}
    </div>
    </>
}