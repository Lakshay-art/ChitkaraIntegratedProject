import Image from 'next/image';
import react from 'react'
import { FlexBox, Highlight, Text, TextAnimation, TextWrap, Title } from './Banner.styles';

const Banner = () => {
    return (
        <FlexBox>
            <TextWrap>
                <TextAnimation>
                    <div>Crazy<Highlight> Editing</Highlight></div>
                    <div>Crazy<Highlight> Gif</Highlight></div>
                    {/* <div>Crazy Animation</div> */}
                </TextAnimation>
                <Title>The leader in Image and Video Editing.</Title>
                <Text>Lets Edit Your Video and Image and then Convert into Crazy transition Only on this website.</Text></TextWrap>
            <Image src='/Assets/Banner.webp' width={'400px'} height='200px' />

        </FlexBox>
    )
}
export default Banner;
