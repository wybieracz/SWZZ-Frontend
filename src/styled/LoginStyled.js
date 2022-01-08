import styled from "styled-components";

const LoginBody = styled.div`
padding: 0px;
`;

const LoginForm = styled.form`
margin: 0 auto;
max-width: 320px;
`;

const LoginHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const LoginCheckbox = styled.div`
padding-bottom: 5%;
`;

const LoginButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 3%;
`;

const LoginButton = styled.button`
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

const LoginItem = styled.div`
margin-bottom: 5%;
`;

const LoginErrorText = styled.div`
color: red;
`

export { LoginBody, LoginForm, LoginHeader, LoginCheckbox, LoginErrorText, LoginButtonWrapper, LoginButton, LoginItem };