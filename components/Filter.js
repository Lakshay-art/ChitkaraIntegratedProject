import Image from "next/image";
import React from "react";
import { Filters, FilterText, ImageWrap, Text } from "./Banner/Banner.styles";
const data = [
    {
        Image: '/Assets/thug_life1.png',
        desc: 'Face Edit '
    },
    {
        Image: '/Assets/img-6.png',
        desc: 'Just Gif It'
    },
    {
        Image: '/Assets/img-2.png',
        desc: 'Transformations'
    },
    {
        Image: '/Assets/img-4.png',
        desc: 'Crop It'
    },
    {
        Image: '/Assets/thug_life1.png',
        desc: 'Edit'
    }
]
const Filter = () => {

    return (
        <Filters>
            {
                data.map((item, index) => {
                    return (
                        <ImageWrap>
                            <Image src={item.Image} height="auto" width='200px' />
                            <FilterText>
                                {item.desc}
                            </FilterText>
                        </ImageWrap>
                    )
                })
            }
        </Filters>
    )

}
export default Filter;