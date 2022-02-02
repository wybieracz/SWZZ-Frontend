import styled from "styled-components";
import { GreyLight, Raspberry } from "../../../../colors/Colors";

const GroupSettingsHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: left;
word-wrap: break-word;
display: table;
table-layout: fixed;
width: 100%;
`;

const GroupSettingsText = styled.div`
font-size: 40px;
margin-bottom: 3%;
font-weight: 1200;
`;

const GroupSettingsButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1 1 0%;
flex-direction: column;
justify-content: space-evenly;
margin: 5%;
`;

const GroupSettingsButton = styled.button`
border-radius: 40px;
background: ${GreyLight};
height: 50px;
width: 312.5px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 0px max(25px, 10%) 40px max(25px, 10%);
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

const GroupSettingsDeleteButton = styled.button`
border-radius: 40px;
background: ${GreyLight};
height: 50px;
width: 312.5px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 0px max(25px, 10%) 0px max(25px, 10%);
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

export {
  GroupSettingsHeader,
  GroupSettingsText,
  GroupSettingsButtonWrapper,
  GroupSettingsButton,
  GroupSettingsDeleteButton
};