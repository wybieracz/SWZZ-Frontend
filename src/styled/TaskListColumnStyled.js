import styled from "styled-components";

const ColumnHeader = styled.div`
text-transform: uppercase;
margin-bottom: 20px;
`;

const ColumnBody = styled.div`
height: 100%;
`;

const TaskListColumnContainer = styled.div`
padding: 10px;
border-radius: 6px;
background: #d4d4d4;
`;

export { ColumnHeader, ColumnBody, TaskListColumnContainer };