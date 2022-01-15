import styled from "styled-components";
import { GreyDark, GreyNight } from "../../../../colors/Colors";

const RoleSelectorButton = styled.button`
border-radius: 40px;
background: ${GreyNight};
height: 20px;
width: auto;
max-width: 200px;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
font-size: 10px;
font-weight: 700;
color: #FFFFFF;
display: flex;
border: 0px;
padding: 0px 8px 0px 8px;
margin: 3px 3px 0px 0px;
&:hover{
  background: ${GreyDark};
}
`;

const RoleSelectorWrapper = styled.div`
position: relative;
`;

const RoleSelectorDropWrapper = styled.div`
position: absolute;
display: inline-block;
background: #E4E4E4;
padding: 2px;
border-radius: 10px;
bottom: 100%;
`;

const RoleSelectorDropElement = styled.button`
position: relative;
display: block;
width: 100%;
white-space: nowrap;
padding: 2px 8px 2px 5px;
border-radius: 10px;
background: #E4E4E4;
overflow: hidden;
font-size: 10px;
font-weight: 700;
color: #2B2B2B;
border: 0px;
text-align: left;
&:hover{
  background: #FFFFFF;
}
`;

const RoleDot = styled.div`
width: 10px;
height: 10px;
display: inline-block;
border-radius: 50%;
background: ${props => props.background};
margin: 0px 5px 0px 0px;
`;

export { RoleSelectorButton, RoleSelectorWrapper, RoleSelectorDropWrapper, RoleSelectorDropElement, RoleDot }