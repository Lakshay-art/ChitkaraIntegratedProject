import Image from 'next/image';
import react from 'react'
import { FlexBox, Highlight, Imgs, Text, TextAnimation, TextWrap, Title } from './Banner.styles';

const Banner = () => {
    return (
        <FlexBox>
            <TextWrap>
                <TextAnimation>
                    <div>Crazy<Highlight> Editing</Highlight></div>
                    <div>Crazy<Highlight> Gif</Highlight></div>
                    {/* <div>Crazy Animation</div> */}
                </TextAnimation>
                <Title>Be a creator, within a minute.</Title>
                <Text>Lets create something worth sharing!!</Text></TextWrap>
            <Imgs>
                <Image src='/Assets/Banner.webp' width={'350px'} height='200px' />
            </Imgs>
        </FlexBox>
    )
}
export default Banner;
