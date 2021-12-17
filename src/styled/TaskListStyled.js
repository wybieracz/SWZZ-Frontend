import styled from "styled-components";

const TaskListContainer = styled.div`
  padding: 10px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

export { TaskListContainer, ListGrid }