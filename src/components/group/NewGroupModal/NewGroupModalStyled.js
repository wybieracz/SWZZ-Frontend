import styled from "styled-components";

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

const NewGroupButtonText = styled.div`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

export {
  NewGroupHeader,
  NewGroupBody,
  NewGroupButtonWrapper,
  NewGroupButton,
  NewGroupButtonText
};