import styled from "styled-components";

const CardHeader = styled.div`
font-weight: bold;
font-size: large;
word-wrap: break-word;
display: table;
table-layout: fixed;
width: 100%;
word-wrap: break-word;
`;

const Buttons = styled.div`
display: flex;
align-items: center;
`;

const CardFooter = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const DragItem = styled.div`
padding: 10px;
border-radius: 6px;
background: #FFFFFF;
margin: 0 0 8px 0;
display: grid;
grid-gap: 20px;
flex-direction: column;
width: 100%;
`;

const CommissioneeButton = styled.button`
border-radius: 40px;
background: ${props => props.disabled ? (props.background[1]) : (props.background[0])};
height: 20px;
width: auto;
max-width: 200px;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
font-size: 10px;
font-weight: 700;
color: #FFFFFF;
display: flex;
border: 0px;
padding: 0px 8px 0px 8px;
&:hover{
  background: ${props => (props.background[1])};
}
`;

export { CardHeader, CardFooter, Buttons, DragItem, CommissioneeButton }