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
background: ${props => (props.background)};
color: #FFFFFF;
height: 40px;
width: 250px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
border: 0px;
font-size: 20px;
font-weight: 700;
&:hover{
  background: ${props => (props.backgroundHover)};
}
`;

export {
  DeleteGroupHeader,
  DeleteGroupBody,
  DeleteGroupModalButtonWrapper,
  DeleteGroupModalButton
}