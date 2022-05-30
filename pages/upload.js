// import ByFormData from '../components/ByFormData';
import Layout from '../components/Layout';

import ByBlobToBase64 from '../components/ByBlobToBase64';
import Pintura from '../components/Pintura';
import { useState } from 'react';
// import ByBase64 from '../components/ByBase64'


const App = () => {
const[type,settype]=useState("videotogif");


    return (
        <>
          {/* <ByFormData/>   */}
          <Layout>
              <button onClick={()=>settype("videotogif")} > Video to Gif</button>
              <button onClick={()=>settype("imagetogif")} > Image to Gif</button> 
              <Pintura type={type}/>
          </Layout>
           {/* <ByBase64/> */}
          
        </>
    );
};

export default App;
