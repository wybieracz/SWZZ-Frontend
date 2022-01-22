import styled from "styled-components";

const DeleteGroupHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const DeleteGroupBody = styled.div`
font-size: 24px;
text-align: center;
padding: 20px;
`;

const DeleteGroupModalButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1 1 0%;
flex-direction: row;
justify-content: space-evenly;
margin: 3%;
`;

const DeleteGroupModalButton = styled.button`
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

const DeleteGroupModalButtonTextGreen = styled.span`
font-size: 18px;
font-weight: bold;
color: green;
`;

const DeleteGroupModalButtonTextRed = styled.span`
font-size: 18px;
font-weight: bold;
color: red;
`;

export {
  DeleteGroupHeader,
  DeleteGroupBody,
  DeleteGroupModalButtonWrapper,
  DeleteGroupModalButton,
  DeleteGroupModalButtonTextGreen,
  DeleteGroupModalButtonTextRed
}