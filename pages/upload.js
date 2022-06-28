// import ByFormData from '../components/ByFormData';
import Layout from '../components/Layout';

import ByBlobToBase64 from '../components/ByBlobToBase64';
import Pintura from '../components/Pintura';
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner/Banner';
import { Button, Flex, FlexBox, Wrap, WrapBox } from '../components/Banner/Banner.styles';
import Filter from '../components/Filter';
import DropMessage from '../components/DropMessage/DropMessage';
import About from './about';
import Suggestion from '../components/Suggestion'

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
      <WrapBox>
        <Layout>
          <Flex>
            <Button onClick={() => settype2("videotogif")} > Video to Gif</Button>
            <Button onClick={() => settype2("imagetogif")} > Image to Gif</Button>
          </Flex>
          <Pintura type={type} />  </Layout>
        <DropMessage />
      </WrapBox>
      {/* <Suggestion/> */}
      {/* <ByBase64/> */}

    </>
  );
};

export default App;
