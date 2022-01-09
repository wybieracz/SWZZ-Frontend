import styled from "styled-components";

const TaskListWrapper = styled.div`
position: relative;
margin-left: max(250px, 15%);
padding: 0px 10px 10px 10px;
background: #F7F7F7;
display: flex;
flex-flow: column;
height: 100%;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

const Separator = styled.hr`
  border-top: 3px solid #D1D1D1;
  background-color: #F7F7F7;
  opacity: 1;
  margin: 0px 10px 10px;
`;

export { ListGrid, Separator, TaskListWrapper }