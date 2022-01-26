import styled from "styled-components";
import { Grey, GreyDark, GreyNight } from "../../../colors/Colors";

const NewGroupHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const NewGroupBody = styled.div`
font-size: 24px;
text-align: center;
padding: 20px;
`;

const NewGroupButtonWrapper = styled.div`
display: flex;
align-items: center;
flex: 1 1 0%;
flex-direction: row;
justify-content: space-evenly;
text-overflow: ellipsis;
overflow: hidden;
margin: 3%;
`;

const NewGroupButton = styled.button`
border-radius: 40px;
background: #2B2B2B;
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
color: #FFFFFF;
&:hover{
  background: #545454;
}
`;

export {
  NewGroupHeader,
  NewGroupBody,
  NewGroupButtonWrapper,
  NewGroupButton
};