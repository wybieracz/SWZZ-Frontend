import styled from "styled-components";

const NotFoundBody = styled.div`
align-items: center;
justify-content: center;
display: flex;
background: #FFFFFF;
height: 100vh;
`;

const NotFoundContentWrapper = styled.div`
display: flex;
padding: 30px;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 10px;
background: #E4E4E4;
heigth: 40vh;
position: relative;
`;

const NotFoundHeader = styled.div`
color: #2B2B2B!important;
font-weight: bold;
font-size: x-large;
word-wrap: break-word;
padding-bottom: 30px;
`;

const NotFoundButton = styled.button`
border-radius: 40px;
background: #2B2B2B;
color: #E4E4E4;
height: 40px;
width: 250px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 30px max(25px, 10%) 0px max(25px, 10%);
border: 2px solid #2B2B2B;
font-size: 18px;
font-weight: 700;
color: #E4E4E4;
&:hover{
  background: #545454;
  border: 2px solid #545454;
}
`;

export {
  NotFoundBody,
  NotFoundContentWrapper,
  NotFoundHeader,
  NotFoundButton
};