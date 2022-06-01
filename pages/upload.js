// import ByFormData from '../components/ByFormData';
import Layout from '../components/Layout';

import ByBlobToBase64 from '../components/ByBlobToBase64';
import Pintura from '../components/Pintura';
import  React  from 'react';
// import ByBase64 from '../components/ByBase64'


const App = () => {
const[type,settype]=React.useState("videotogif");
const settype2 = React.useCallback((state) => {
    settype(state);
  }, [type]);



    return (
        <>
          {/* <ByFormData/>   */}
          <Layout>
              <button onClick={()=>settype2("videotogif")} > Video to Gif</button>
              <button onClick={()=>settype2("imagetogif")} > Image to Gif</button> 
              <Pintura type={type}/>
          </Layout>
           {/* <ByBase64/> */}
          
        </>
    );
};

export default App;
