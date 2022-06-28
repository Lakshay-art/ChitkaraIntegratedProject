import React from "react";
import Image from 'next/image'
import { About, Container, Flex, Flexin, Texta, TextWrap, Wrap } from "../components/Banner/Banner.styles";
const about = () => {
    return (
        <>
            <Container>
                <About>

                    <Image src="/Assets/loader-3.gif" width="390px" height="400px" />
                    <Flexin>
                        <Texta>About</Texta>
                        <p>“GifIt” is Image and Video Editing, conversion into Gif where we can edit with face recognition
                            ,adding text into images, crop, adding filters into the images with just one tap. This application is so
                            user friendly even everyone can use this for their personal and professional use.</p>
                        <b>
                            Creating Gif is the main role is good to go know more about this plratform.
                        </b>

                    </Flexin>
                </About>
            </Container></>
    )
}
export default about;
