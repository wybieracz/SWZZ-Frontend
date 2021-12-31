import styled from "styled-components";

const LoginBody = styled.div`
padding: 60px 0;
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
background: rgb(209, 209, 209);
color: #adadad;
height: 40px;
width: 324px;
text-align: center;
&:hover{
  background:rgb(161, 161, 161);
}
`;

const LoginButtonText = styled.span`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

const LoginItem = styled.div`
margin-bottom: 5%;
`;

const LoginErrorText = styled.div`
color: red;
`

export { LoginBody, LoginForm, LoginHeader, LoginCheckbox, LoginErrorText, LoginButtonWrapper, LoginButton, LoginButtonText, LoginItem };