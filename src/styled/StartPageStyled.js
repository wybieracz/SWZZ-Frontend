import styled, { css } from "styled-components";

const StartBody = styled.div`
padding: 80px;
text-align: center;
&:h1{
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
}
`;

const StartButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const StartButton = styled.button`
border-radius: 40px;
background: rgb(209, 209, 209);
color: #adadad;
height: 40px;
width: 200px;
margin-top: 1%;
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

export { StartBody, StartButtonWrapper, StartButton, StartButtonText };