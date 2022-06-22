import Image from 'next/image';
import react from 'react'
import { FlexBox, Text, TextWrap, Title } from './Banner.styles';

const Banner = () => {
    return (
        <FlexBox>
            <TextWrap>
                <Text>Crazy Editing   </Text>
                <Title>The leader in Image and Video Editing.</Title>
                <Text>Lets Edit Your Video and Image and then Convert into Crazy transition Only on this website.</Text></TextWrap>
            <Image src='/Assets/Banner.webp' width={'400px'} height='200px' />

        </FlexBox>
    )
}
export default Banner;
