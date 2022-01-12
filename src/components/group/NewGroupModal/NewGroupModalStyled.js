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
background: ${Grey};
height: 50px;
width: 250px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
border: 2px solid ${GreyNight};
font-size: 18px;
font-weight: 700;
color: ${GreyNight};
&:hover{
  background: ${GreyDark};
  border: 2px solid ${GreyDark};
  color: #E4E4E4;
}
`;

export {
  NewGroupHeader,
  NewGroupBody,
  NewGroupButtonWrapper,
  NewGroupButton
};