import styled from "styled-components";

const SignupBody = styled.div`
padding: 0px;
`;

const SignupForm = styled.form`
margin: 0 auto;
max-width: 480px;
`;

const SignupHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const SignupButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 3%;
`;

const SignupButton = styled.button`
border-radius: 40px;
background: #2B2B2B;
border: 2px solid #2B2B2B;
color: #E4E4E4;
font-size: 18px;
font-weight: 700;
height: 40px;
width: 324px;
text-align: center;
&:hover{
  background: #545454;
  border: 2px solid #545454;
}
`;

const SignupItem = styled.div`
margin-bottom: 5%;
`;

const SignupErrorText = styled.div`
color: red;
`

export { SignupBody, SignupForm, SignupHeader, SignupErrorText, SignupButtonWrapper, SignupButton, SignupItem };