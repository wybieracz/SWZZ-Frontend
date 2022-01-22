import styled from "styled-components";

const EditGroupAttributesForm = styled.form`
margin: 0 auto;
max-width: 480px;
`;

const EditGroupAttributesHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const EditGroupAttributesButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 3%;
`;

const EditGroupAttributesButton = styled.button`
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

const EditGroupAttributesButtonText = styled.div`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

const EditGroupAttributesItem = styled.div`
margin-bottom: 5%;
`;

const EditGroupAttributesEmojiItem = styled.div`
margin: 0 auto;
max-width: 480px;
`;

const EditGroupAttributesLabel = styled.div`
padding-bottom: 0.5rem;
`;

const EditGroupAttributesEmojiWrapper = styled.span`
text-align: center;
font-size: 30px;
display: flex;
flex-direction: column;
`;

const EditGroupAttributesEmojiButtonIcon = styled.button`
border-radius: 0.25rem;
background: #FFFFFF;
border: 1px solid #CED4DA;
text-align: center;
&:hover{
  background: #F7F7F7;
}
`;

const EditGroupAttributesEmojiButtonEmoji = styled.button`
padding: 3px;
border-radius: 0.25rem;
background: #FFFFFF;
border: 1px solid #CED4DA;
text-align: center;
&:hover{
  background: #F7F7F7;
}
`;

const EditGroupAttributesErrorText = styled.div`
color: red;
`;

export {
  EditGroupAttributesForm,
  EditGroupAttributesHeader,
  EditGroupAttributesButtonWrapper,
  EditGroupAttributesButton,
  EditGroupAttributesButtonText,
  EditGroupAttributesItem,
  EditGroupAttributesEmojiItem,
  EditGroupAttributesLabel,
  EditGroupAttributesEmojiWrapper,
  EditGroupAttributesEmojiButtonIcon,
  EditGroupAttributesEmojiButtonEmoji,
  EditGroupAttributesErrorText
};