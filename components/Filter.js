import Image from "next/image";
import Imagee from "./Imagee";
import Videoo from "./Videoo";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FilterCover, Filters, FilterText, FilterWrapper, ImageWrap, Text } from "./Banner/Banner.styles";

const Desc = ["Thug Life", "Squid Game1", "Squid Game2", "Squid Game3", "Squid Game3", "Squid Game3", "Squid Game3", "Squid Game3", "Squid Game3"]
const assets = ["thug_life", "squidmask1", "squidmask2", "squidmask3", "squidmask1", "squidmask2", "squidmask3", "squidmask3"]
const height = ["0.5", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0", "1.0"]
const Filter = (props) => {
  const [convertimg, setConvertimg] = React.useState();
  const [convertvid, setConvertvid] = React.useState();

  const [selected, setSelected] = React.useState();
  const setConvertImg = React.useCallback(
    (state) => {
      setConvertimg(state);
    },
    [convertimg]
  );
  const setConvertVideo = React.useCallback(
    (state) => {
      setConvertvid(state);
    },
    [convertvid]
  );
  const tap = (index) => {
    props.type == "imagetogif" ?
      setConvertImg(props.image) :
      setConvertVideo(props.image)
    setSelected(index)

    props.tapped()
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data)

  }, [props.data])

  // return (< FilterCover >
  //   {convertimg && (
  //     <Imagee ffmpeg={props.ffmpeg} complete={props.complete} image={convertimg} asset={selected} />
  //   )} <Filters>
  //     {
  //       data && data.map((item, index) => {
  //         return (<>
  //           <FilterWrapper>
  //             <ImageWrap onClick={() => {
  //               tap(assets[index])
  //             }}   >
  //               <Image src={item.secure_url} height="80px" width='80px' />
  //             </ImageWrap>
  //             <FilterText>
  //               {Desc[index]}
  //             </FilterText></FilterWrapper>
  //         </>

  //         )
  //       })
  //     }
  //   </Filters ></FilterCover>

  return (< FilterCover >
    {convertimg && (
      <Imagee ffmpeg={props.ffmpeg} complete={props.complete} image={convertimg} asset={assets[selected]} height={height[selected]} />
    )}
    {convertvid && (
      <Videoo
        ffmpeg={props.ffmpeg}
        complete={props.complete}
        public_id={convertvid}
        asset={selected}
      />
    )}
    <Filters>
      {
        data && data.map((item, index) => {
          return (<>
            <FilterWrapper>
              <ImageWrap onClick={() => {
                tap(index)
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