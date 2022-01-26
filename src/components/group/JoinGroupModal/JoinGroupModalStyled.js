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

const JoinGroupItem = styled.div`
margin-bottom: 5%;
`;

const JoinGroupErrorText = styled.div`
color: red;
`;

const JoinGroupButtonIconWrapper = styled.div`
padding: 0% 43% 0% 43%;
`;

export {
  JoinGroupForm,
  JoinGroupHeader,
  JoinGroupButtonWrapper,
  JoinGroupButton,
  JoinGroupItem,
  JoinGroupErrorText,
  JoinGroupButtonIconWrapper
};