import styled from "styled-components";
import { GreyLight, Raspberry } from "../../../colors/Colors";

const OptionsBody = styled.div`
position: relative;
margin-left: max(250px, 15%);
padding: 4%;
text-align: center;
background: ${GreyLight};
`;

const OptionsHeader = styled.div`
font-size: 50px;
margin-bottom: 5%;
margin-top: 5%;
font-weight: 600;
`;

const OptionsText = styled.div`
font-size: 30px;
margin-bottom: 3%;
`;

const OptionsButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1 1 0%;
flex-direction: column;
justify-content: space-evenly;
margin: 5%;
`;

const OptionsButton = styled.button`
border-radius: 40px;
background: ${GreyLight};
height: 50px;
width: 312.5px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 40px max(25px, 10%) 0px max(25px, 10%);
border: 2px solid #2B2B2B;
font-size: 20px;
font-weight: 700;
color: #2B2B2B;
&:hover{
  background: #545454;
  border: 2px solid #545454;
  color: #FFFFFF;
}
`;

const OptionsDeleteButton = styled.button`
border-radius: 40px;
background: ${GreyLight};
height: 50px;
width: 312.5px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 40px max(25px, 10%) 0px max(25px, 10%);
border: 2px solid ${Raspberry};
font-size: 20px;
font-weight: 700;
color: ${Raspberry};
&:hover{
  background: ${Raspberry};
  border: 2px solid ${Raspberry};
  color: #FFFFFF;
}
`;

const ButtonIconWrapper = styled.div`
padding: 0% 43% 0% 43%;
`;

export {
  OptionsBody,
  OptionsHeader,
  OptionsText,
  OptionsButtonWrapper,
  OptionsButton,
  OptionsDeleteButton,
  ButtonIconWrapper
};