import Image from "next/image";
import Imagee from "./Imagee";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FilterCover, Filters, FilterText, FilterWrapper, ImageWrap, Text } from "./Banner/Banner.styles";

const Desc = ["Thug Life", "Happy Birthday", "Squid Game1", "Squid Game2", "Squid Game3", "Squid Game3", "Squid Game3", "Squid Game3", "Squid Game3", "Squid Game3"]
const assets = ["thug_life", "birthdayhat", "squidmask1", "squidmask2", "squidmask3", "squidmask1", "squidmask2", "squidmask3", "squidmask3"]

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
    props.tapped()
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data)

  }, [props.data])

  return (< FilterCover >
    {convertimg && (
      <Imagee ffmpeg={props.ffmpeg} complete={props.complete} image={convertimg} asset={selected} />
    )} <Filters>
      {
        data && data.map((item, index) => {
          return (<>
            <FilterWrapper>
              <ImageWrap onClick={() => {
                tap(assets[index])
              }}   >
                <Image src={item.secure_url} height="80px" width='80px' />
              </ImageWrap>
              <FilterText>
                {Desc[index]}
              </FilterText></FilterWrapper>
          </>

          )
        })
      }
    </Filters ></FilterCover>

  )

}
export default Filter;