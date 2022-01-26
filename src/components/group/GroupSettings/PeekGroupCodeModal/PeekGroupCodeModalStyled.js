import styled from "styled-components";
import { White, GreyDark, GreyNight, GreenLight, Green } from "../../../../colors/Colors";

const PeekGroupCodeHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const PeekGroupCodeBody = styled.span`
font-size: 20px;
font-weight: bold;
display: flex;
text-align: center;
items-align: center;
justify-content: center;
`;

const PeekGroupCodeButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
flex: 1 1 0%;
flex-direction: row;
justify-content: space-evenly;
margin: 3%;
`;

const PeekGroupCodeButton = styled.button`
border-radius: 40px;
background: ${props => props.copied ? GreenLight : GreyNight};
height: 40px;
width: 250px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
border: 0px;
font-size: 18px;
font-weight: 700;
color: ${White};
&:hover{
  background: ${props => props.copied ? Green : GreyDark};
}
`;

export {
    PeekGroupCodeHeader,
    PeekGroupCodeBody,
    PeekGroupCodeButtonWrapper,
    PeekGroupCodeButton
};