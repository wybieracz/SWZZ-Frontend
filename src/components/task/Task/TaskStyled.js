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

export { CardHeader, CardFooter, Buttons, DragItem }