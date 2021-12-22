import styled from "styled-components";

const SignupBody = styled.div`
padding: 60px 0;
`;

const SignupForm = styled.form`
margin: 0 auto;
max-width: 480px;
`;

const SignupHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
padding-bottom: 2%;
`;

const SignupButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
`;

const SignupButton = styled.button`
border-radius: 40px;
background: rgb(209, 209, 209);
color: #adadad;
height: 40px;
width: 482px;
text-align: center;
&:hover{
  background:rgb(161, 161, 161);
}
`;

const SignupButtonText = styled.div`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

const SignupItem = styled.div`
margin-bottom: 5%;
`;

export { SignupBody, SignupForm, SignupHeader, SignupButtonWrapper, SignupButton, SignupButtonText, SignupItem };