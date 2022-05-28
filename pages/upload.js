import ByFormData from '../components/ByFormData';
import Layout from '../components/Layout';

import ByBlobToBase64 from '../components/ByBlobToBase64';
import ByBase64 from '../components/ByBase64'


const App = () => {
    return (
        <>
          {/* <ByFormData/>   */}
          <Layout>
          <ByBlobToBase64/></Layout>
           {/* <ByBase64/> */}
        </>
    );
};

export default App;
