import styled from "styled-components";

const GroupCreatorForm = styled.form`
margin: 0 auto;
max-width: 480px;
`;

const GroupCreatorHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const GroupCreatorButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 3%;
`;

const GroupCreatorButton = styled.button`
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

const GroupCreatorButtonText = styled.div`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

const GroupCreatorItem = styled.div`
margin-bottom: 5%;
`;

const GroupCreatorEmojiText = styled.span`
text-align: center;
font-size: 20px;
display: flex;
flex-direction: column;
`;

const GroupCreatorEmojiError = styled.span`
text-align: center;
font-size: 20px;
display: flex;
flex-direction: column;
color: red;
`;

const GroupCreatorErrorText = styled.div`
color: red;
`

export { GroupCreatorForm, GroupCreatorHeader, GroupCreatorButtonWrapper, GroupCreatorButton, GroupCreatorButtonText, GroupCreatorItem, GroupCreatorEmojiText, GroupCreatorEmojiError, GroupCreatorErrorText };