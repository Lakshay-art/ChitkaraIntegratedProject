import Image from "next/image";
import Imagee from "./Imagee";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Filters, FilterText, ImageWrap, Text } from "./Banner/Banner.styles";

const Desc=["Thug Life","Happy Birthday","Squid Game1","Squid Game2","Squid Game3","Squid Game3","Squid Game3","Squid Game3","Squid Game3","Squid Game3"]
const assets=["thug_life","birthdayhat","squidmask1","squidmask2","squidmask3","squidmask1","squidmask2","squidmask3","squidmask3"]

const Filter = (props) => {
  const [convertimg, setConvertimg] = React.useState();
  const [selected, setSelected] = React.useState();
const setConvertImg = React.useCallback(
    (state) => {
      setConvertimg(state);
    },
    [convertimg]
  );
const tap = (asset) => {
    setConvertImg(props.image);
    setSelected(asset)
}
    const [data,setData]=useState([
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

}, [props.data])

    return (<>
      {convertimg && (
          <Imagee ffmpeg={props.ffmpeg} complete={props.complete} image={convertimg} asset={selected} />
        )} <Filters>
            {
               data&& data.map((item, index) => {
                    return (<>
                        <ImageWrap onClick={() => {
                            tap(assets[index])
                        }}   >
                           <Image src={item.url} height="60px" width='60px' />
                           
                           <FilterText>
                                {Desc[index]}  
                            </FilterText></ImageWrap>
                            </>
                      
                    )
                })
            }
        </Filters ></>
       
    )

}
export default Filter;