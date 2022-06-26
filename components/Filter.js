import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Filters, FilterText, ImageWrap, Text } from "./Banner/Banner.styles";

const Desc = ["Thug Life", "Happy Birthday", "Squid Game1", "Squid Game2", "Squid Game3", "Squid Game3", "Squid Game3", "Squid Game3", "Squid Game3", "Squid Game3"]

const tap = () => {
    console.log(12);
}
const Filter = (props) => {
    const [data, setData] = useState([
        {
            url: '/Assets/thug_life1.png',
        },
        {
            url: '/Assets/img-13.png',
        },
        {
            url: '/Assets/img-12.png',
        },
        {
            url: '/Assets/img-4.png',
        },
        {
            url: '/Assets/img-9.png',
        }
    ]);
    useEffect(() => {
        setData(props.data)
        console.log(props.data)
    }, [props.data])
    return (
        <Filters>
            {
                data && data.map((item, index) => {
                    return (
                        <ImageWrap onClick={() => {
                            tap()
                        }}   >
                            <><Image src={item.url} height="60px" width='60px' /><FilterText>
                                {Desc[index]}
                            </FilterText></>
                        </ImageWrap>
                    )
                })
            }
        </Filters >
    )

}
export default Filter;