import styled from '@emotion/styled'
export const FlexBox = styled.div`
display:flex;
flex-wrap:wrap;
margin:-8px;
color:white;
// margin-top:100px;
overflow:hidden;
width:101vw !important;
background-image: linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
justify-content:space-between;
padding-left:10px;
`
export const Text = styled.div`
font-size:22px;
line-height:26.4px;
text-align:left;
`
export const Title = styled.div`
font-size:52px;
line-height:52px;
text-align:left;

`
export const TextWrap = styled.div`
max-width:720px;
padding-top:23px;
gap:.5rem;
display:flex;
padding-bottom:9px;
flex-direction:column;
`
export const Button = styled.button`
    background-position: center;
    transition: background 0.8s;
border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  box-shadow: 0 0 4px #999;
  outline: none;
&:hover{
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .4);
    // background:red;
}
`
export const Flex = styled.div`
display:flex;
flex-direction-column;
gap:5px;
`
export const ButtonGiff = styled.button`
background: rgb(247,150,192);
background: radial-gradient(circle, rgba(247,150,192,1) 0%, rgba(118,174,241,1) 100%);
  line-height: 42px;
  padding: 0;
  border: none;
  width:50%;
  color:white;opacity:.8;
  border-radius:4px;

  &:hover{
    opacity:1;
    box-shadow: 5px 5px 5px 3px rgba(0, 0, 255, .2);
  }
`

export const Wrap = styled.div`
height:600px;
width:100%;
margin:0;
background:red;
`
export const TextAnimation = styled.div`
display:inline-block;
width:100%;
height:40px;

overflow:hidden;

div &{
 font-size:18px;
 font-family: monospace;
// margin-left:-20px;
// position:absolute;
//   font-weight:300;  


}
 & div:nth-child(1) {
  animation-delay:5s;
  animation: roll 5s infinite;

 }
 & div:nth-child(2){
  animation-delay:4s;
  animation: roll2 5s infinite ;

}
@keyframes roll{
0%{
  transform: translateY(50%);
}
100%{
  transform: translateY(-350%);
}
}
@keyframes roll2{
  0%{
    transform: translateY(190%);
  }
  50%
  {
    transform:translateY(-40%);
  }
  75%{
    transform:translateY(-180%);
  }
  100%{
    transform: translateY(-350%);
  }}

 }
 `
export const Container = styled.div`
max-height:400px;

margin-right:100px;
border-radius:20px;
overflow:scroll;
`
export const WrapBox = styled.div`
display:flex;
margin-top:20px;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
`
export const ImageWrap = styled.div`

cursor:pointer;
display:flex;
flex-wrap:wrap;
border:1px solid white;
justify-content:center;
// height: 90px;
    width: 92px;

flex-direction:column;
margin:10px;
border: 3px solid #1fe8b6;;
`
export const Filters = styled.div`

`
export const FilterText = styled.div`
margin :0 auto;
font-size: 14px;
font-family: Arial, Helvetica, sans-serif;
background: linear-gradient(to right, #f32170,
        #ff6b08, #cf23cf, #eedd44);
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
`
export const Highlight = styled.span`
color:red;`