import styled from "styled-components";
import { White, Grey, GreyDark, GreyNight, GreenLight, Green } from "../../../colors/Colors";

const PeekGroupCodeHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const PeekGroupCodeBody = styled.span`
font-size: 18px;
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
margin: 3%;
`;

const PeekGroupCodeButton = styled.button`
border-radius: 40px;
background: ${props => props.copied ? GreenLight : Grey};
height: 40px;
width: 480px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
border: 2px solid ${props => props.copied ? GreenLight : GreyNight};
font-size: 18px;
font-weight: 700;
color: ${props => props.copied ? White : GreyNight};
&:hover{
  background: ${props => props.copied ? Green : GreyDark};
  border: ${props => props.copied ? Green : GreyDark};
  color: #E4E4E4;
}
`;

const PeekGroupCodeButtonText = styled.div`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

export {
    PeekGroupCodeHeader,
    PeekGroupCodeBody,
    PeekGroupCodeButtonWrapper,
    PeekGroupCodeButton,
    PeekGroupCodeButtonText
};