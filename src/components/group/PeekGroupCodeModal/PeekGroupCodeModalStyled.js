import styled from "styled-components";

const PeekGroupCodeHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
`;

const PeekGroupCodeBody = styled.span`
font-size: 18px;
font-weight: bold;
display: flex;
text-align: center;
items-align: center;
justify-content: center;
`;

const PeekGroupCodeButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 3%;
`;

const PeekGroupCodeButton = styled.button`
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

const PeekGroupCodeButtonText = styled.div`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

export {
    PeekGroupCodeHeader,
    PeekGroupCodeBody,
    PeekGroupCodeButtonWrapper,
    PeekGroupCodeButton,
    PeekGroupCodeButtonText
};