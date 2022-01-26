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
background: #2B2B2B;
height: 40px;
width: 484px;
display: inline;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
border: 0px;
font-size: 18px;
font-weight: 700;
color: #FFFFFF;
&:hover{
  background: #545454;
}
`;

const GroupCreatorItem = styled.div`
margin-bottom: 5%;
`;

const GroupCreatorEmojiItem = styled.div`
margin: 0 auto;
max-width: 480px;
`;

const GroupCreatorLabel = styled.div`
padding-bottom: 0.5rem;
`;

const GroupCreatorEmojiWrapper = styled.span`
text-align: center;
font-size: 30px;
display: flex;
flex-direction: column;
`;

const GroupCreatorEmojiButtonIcon = styled.button`
border-radius: 0.25rem;
background: #FFFFFF;
border: 1px solid #CED4DA;
text-align: center;
&:hover{
  background: #F7F7F7;
}
`;

const GroupCreatorEmojiButtonEmoji = styled.button`
padding: 3px;
border-radius: 0.25rem;
background: #FFFFFF;
border: 1px solid #CED4DA;
text-align: center;
&:hover{
  background: #F7F7F7;
}
`;

const GroupCreatorButtonIconWrapper = styled.div`
padding: 0% 43% 0% 43%;
`;

const GroupCreatorErrorText = styled.div`
color: red;
`;

export {
  GroupCreatorForm,
  GroupCreatorHeader,
  GroupCreatorButtonWrapper,
  GroupCreatorButton,
  GroupCreatorItem,
  GroupCreatorEmojiItem,
  GroupCreatorLabel,
  GroupCreatorEmojiWrapper,
  GroupCreatorEmojiButtonIcon,
  GroupCreatorEmojiButtonEmoji,
  GroupCreatorButtonIconWrapper,
  GroupCreatorErrorText
};