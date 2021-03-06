import styled from "styled-components";

const ActionButton = styled.button`
border-radius: 50%;
border: 0px;
background: ${props => props.disabled ? (props.disabledBackground) : (props.background)};
color: #FFFFFF;
height: 20px;
width: 20px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
margin: 0px 5px 0px 5px;
&:hover {
  background: ${props => props.disabled ? (props.disabledBackground) : (props.hoverBackground)};
}
`;

const AddButton = styled.button`
border-radius: 10%;
border: 0px;
background: ${props => (props.background)};
color: #FFFFFF;
height: 30px;
width: 30px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
padding: 8px;
&:hover {
  background: ${props => (props.hoverBackground)};
}
`;

export { ActionButton, AddButton }