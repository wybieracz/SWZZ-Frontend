import styled from "styled-components";

const ColumnHeader = styled.div`
font-weight: bold;
margin-bottom: 20px;
color: #D1D1D1;
`;

const ColumnBody = styled.div`
height: 100%;
`;

const TaskListColumnContainer = styled.div`
padding: 0px 10px 10px 10px;
border-radius: 6px;
background: #F7F7F7;
`;

export { ColumnHeader, ColumnBody, TaskListColumnContainer };