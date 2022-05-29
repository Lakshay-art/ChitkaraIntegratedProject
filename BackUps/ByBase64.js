

import axios from 'axios';
import react, { useState } from 'react';
import { server } from '../config';
//import {readFileSync} from 'fs';

const Upload=()=>{
    const[preview,setPreiview]=useState();
    const  handleChange=(e)=>
    {
        const files=e.target.files[0];
        previewFile(files);
        axios.post(`${server}/api/upload`,{
            original:files,
        }).then(()=>{
      console.log("first")
        },(err)=>{
      console.log(err);
        })
    }
    const previewFile=(file)=>{
        const reader= new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
           setPreiview(reader.result);
        }
    }
   const OnSubmit=async(e)=>{
   e.preventDefault();
  axios.post(`${server}/api/upload2`,{
      link:preview,
  }).then(()=>{
console.log("first")
  },(err)=>{
console.log(err);
  })
    
   // somewhere in async function

    // if(!preview) return;
    // uploadImage(preview);
   }
   const uploadImage=(base64encode)=>{
    console.log(base64encode);
   }
    return<>
    <form onSubmit={OnSubmit}>
        <input type="file"  className='form-input' onChange={handleChange}/>
        <button type="submit" >SUBMIT</button>
    </form>
    {preview && <img src={preview} alt="photo" style={{height:"200px"}}/>}
    </>
}
export default Upload;