import styled from "styled-components";

const ChangePasswordForm = styled.form`
margin: 0 auto;
max-width: 480px;
`;

const ChangePasswordHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const ChangePasswordButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 3%;
`;

const ChangePasswordButton = styled.button`
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

const ChangePasswordButtonText = styled.div`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

const ChangePasswordItem = styled.div`
margin-bottom: 5%;
`;

const ChangePasswordErrorText = styled.div`
color: red;
`;

export {
  ChangePasswordForm,
  ChangePasswordHeader,
  ChangePasswordErrorText,
  ChangePasswordButtonWrapper,
  ChangePasswordButton,
  ChangePasswordButtonText,
  ChangePasswordItem
};