// import ByFormData from '../components/ByFormData';
import Layout from '../components/Layout';

import ByBlobToBase64 from '../components/ByBlobToBase64';
import Pintura from '../components/Pintura';
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner/Banner';
import { Button, Flex } from '../components/Banner/Banner.styles';

// import ByBase64 from '../components/ByBase64'


const App = () => {
  const [type, settype] = React.useState("videotogif");
  const settype2 = React.useCallback((state) => {
    settype(state);
  }, [type]);

  return (
    <>
      {/* <ByFormData/>   */}

      <Header />
      <Banner />
      <Layout>
        <Flex>
          <Button onClick={() => settype2("videotogif")} > Video to Gif</Button>
          <Button onClick={() => settype2("imagetogif")} > Image to Gif</Button>
        </Flex>
        <Pintura type={type} />
      </Layout>
      {/* <ByBase64/> */}

    </>
  );
};

export default App;
