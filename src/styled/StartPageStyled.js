import styled from "styled-components";

const StartBody = styled.div`
padding: 360px;
text-align: center;
`;

const StartSubheading = styled.span`
color: #6c757d!important;
`;

const StartButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1 1 0%;
flex-direction: row;
justify-content: space-evenly;
margin: 5% 15%;
`;

const StartButton = styled.button`
border-radius: 40px;
background: rgb(209, 209, 209);
color: #adadad;
height: 40px;
width: 250px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
&:hover{
  background:rgb(161, 161, 161);
}
`;

const StartButtonText = styled.span`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

export { StartBody, StartSubheading, StartButtonWrapper, StartButton, StartButtonText };