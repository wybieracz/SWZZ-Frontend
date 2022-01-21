import styled from "styled-components";

const TaskGroupButton = styled.button`
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

const TaskGroupWrapper = styled.div`
position: relative;
`;

export { TaskGroupButton, TaskGroupWrapper }