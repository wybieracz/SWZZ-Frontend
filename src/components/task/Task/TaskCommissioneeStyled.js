import styled from "styled-components";

const TaskCommissioneeButton = styled.button`
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

const TaskCommissioneeWrapper = styled.div`
position: relative;
`;

const TaskCommissioneeDropWrapper = styled.div`
position: absolute;
display: inline-block;
background: #E4E4E4;
padding: 2px;
border-radius: 10px;
top: 100%;
`;

const TaskCommissioneeDropElement = styled.button`
position: relative;
display: block;
width: 100%;
white-space: nowrap;
padding: 2px 8px 2px 5px;
border-radius: 10px;
background: #E4E4E4;
overflow: hidden;
font-size: 10px;
font-weight: 700;
color: #2B2B2B;
border: 0px;
text-align: left;
&:hover{
  background: #FFFFFF;
}
`;

const TaskCommissioneeDot = styled.div`
width: 10px;
height: 10px;
display: inline-block;
border-radius: 50%;
background: ${props => props.background};
margin: 0px 5px 0px 0px;
`;

export { TaskCommissioneeButton,TaskCommissioneeWrapper, TaskCommissioneeDropWrapper, TaskCommissioneeDropElement, TaskCommissioneeDot }