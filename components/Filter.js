import Image from "next/image";
import React from "react";
import { Filters, FilterText, ImageWrap, Text } from "./Banner/Banner.styles";
const data = [
    {
        Image: '/Assets/thug_life1.png',
        desc: 'Face Edit '
    },
    {
        Image: '/Assets/img-13.png',
        desc: 'Just Gif It'
    },
    {
        Image: '/Assets/img-12.png',
        desc: 'Transformations'
    },
    {
        Image: '/Assets/img-4.png',
        desc: 'Crop It'
    },
    {
        Image: '/Assets/img-9.png',
        desc: 'Edit'
    }
]
const tap = () => {
    console.log(12);
}
const Filter = () => {

    return (
        <Filters>
            {
                data.map((item, index) => {
                    return (
                        <ImageWrap onClick={() => {
                            tap()
                        }}   >
                            <><Image src={item.Image} height="60px" width='60px' /><FilterText>
                                {item.desc}
                            </FilterText></>
                        </ImageWrap>
                    )
                })
            }
        </Filters >
    )

}
export default Filter;