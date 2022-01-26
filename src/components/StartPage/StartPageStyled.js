import styled from "styled-components";

const StartBody = styled.div`
align-items: center;
justify-content: center;
display: flex;
background: #FFFFFF;
height: 100vh;
`;

const StartContentWrapper = styled.div`
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

const PrimaryStartButton = styled.button`
border-radius: 40px;
background: #2B2B2B;
color: #FFFFFF;
height: 40px;
width: 250px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 20px max(25px, 10%) 0px max(25px, 10%);
border: 0px;
font-size: 18px;
font-weight: 700;
color: #E4E4E4;
&:hover{
  background: #545454;
}
`;

const SecondaryStartButton = styled.button`
border-radius: 40px;
background: #E4E4E4;
color: #E4E4E4;
height: 40px;
width: 250px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 20px max(25px, 10%) 0px max(25px, 10%);
border: 2px solid #2B2B2B;
font-size: 18px;
font-weight: 700;
color: #2B2B2B;
&:hover{
  background: #545454;
  border: 2px solid #545454;
  color: #E4E4E4;
}
`;

const LogoWrapper = styled.div`
width: 200px;
height: 300px;
background: #E4E4E4;
padding: 30px 0px 30px;
align-items: center;
text-align: center;
`;

export {
  StartBody,
  StartContentWrapper,
  PrimaryStartButton,
  SecondaryStartButton,
  LogoWrapper
};