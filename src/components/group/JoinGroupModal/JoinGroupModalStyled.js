import styled from "styled-components";

const JoinGroupForm = styled.form`
margin: 0 auto;
max-width: 480px;
`;

const JoinGroupHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const JoinGroupButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 3%;
`;

const JoinGroupButton = styled.button`
border-radius: 40px;
background: rgb(209, 209, 209);
color: #adadad;
height: 40px;
width: 484px;
text-align: center;
&:hover{
  background:rgb(161, 161, 161);
}
`;

const JoinGroupButtonText = styled.div`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

const JoinGroupItem = styled.div`
margin-bottom: 5%;
`;

const JoinGroupErrorText = styled.div`
color: red;
`;

export {
  JoinGroupForm,
  JoinGroupHeader,
  JoinGroupButtonWrapper,
  JoinGroupButton,
  JoinGroupButtonText,
  JoinGroupItem,
  JoinGroupErrorText
};