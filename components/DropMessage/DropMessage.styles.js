import styled from '@emotion/styled';
export const WrapText = styled.div`
postition:relative;
// right:0;
// bottom:0;
background-image: linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
//  margin-top:100px;
border-radius:12px;
// border:2px solid grey;
// box-shadow: 7px 7px 4px grey;
align-self:center;
width:400px;
height:max-content;
padding:10px;
@media (max-width:1000px)
{
    margin-top:100px;
    width:75vw;

float:left;

}@media (max-width:600px)
{
    margin-top:30px;
   

}
@media (max-width:485px)
{
    width:75vw;
    margin-top:10px;

   
float:left;

}

`
export const TextDrop = styled.div`
color:black;

// display:flex;
font-size:15px;
// flex-wrap:wrap;
color:white;
justify-content:center;
// padding-top:10px;
@media (max-width:485px)
{
// margin-left:10px;
}

`
export const Icon = styled.div`
float: right;
position:relative;
margin-right:4px;
margin-top:4px;
width:15px;
height:20px;
text-align:center;
cursor:pointer;
color:white;
border-radius:6px;
// border:1.5px solid white;
&:hover{
transform:scale(1.2);
background:red;
}
`
export const Text = styled.b`
font-weight:600px;
font-size:14px;
`
export const FlexBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding-left:2rem;
gap:3px;
color:white;
margin-top:4px;
`