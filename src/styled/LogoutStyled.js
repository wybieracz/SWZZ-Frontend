import styled from "styled-components";

const PrimarySidebarButton = styled.button`
border-radius: 40px;
background: #2B2B2B;
height: 40px;
width: 80%;
min-width: 200px;
display: inline;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 20px max(25px, 10%) 0px max(25px, 10%);
border: 2px solid #2B2B2B;
font-size: 18px;
font-weight: 700;
color: #E4E4E4;
&:hover{
  background: #545454;
  border: 2px solid #545454;
}
`;

export { PrimarySidebarButton };