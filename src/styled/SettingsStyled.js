import styled from "styled-components";

const SettingsBody = styled.div`
position: relative;
margin-left: max(250px, 15%);
padding: 120px;
text-align: center;
`;

const SettingsHeader = styled.div`
font-size: 50px;
margin-bottom: 5%;
`;

const SettingsText = styled.div`
font-size: 30px;
margin-bottom: 3%;
`;

const SettingsButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1 1 0%;
flex-direction: column;
justify-content: space-evenly;
margin: 5%;
`;

const SettingsButton = styled.button`
border-radius: 40px;
background: rgb(209, 209, 209);
color: #adadad;
height: 50px;
width: 312.5px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 40px max(25px, 10%) 0px max(25px, 10%);
&:hover{
  background:rgb(161, 161, 161);
}
`;

const SettingsButtonText = styled.span`
font-size: 20px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

const SettingsDeleteButtonText = styled.span`
font-size: 20px;
font-weight: bold;
color: red;
`;

export { SettingsBody, SettingsHeader, SettingsText, SettingsButtonWrapper, SettingsButton, SettingsButtonText, SettingsDeleteButtonText };