import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import TaskCreator from "./TaskCreator";
import React from "react";
import { ColumnHeader, ColumnBody, TaskListColumnContainer } from "../styled/TaskListColumnStyled";

export default function TaskListColumn ({ status, elements, remove, edit, add }) {
  return (
    <TaskListColumnContainer>
      <ColumnHeader>{status}</ColumnHeader>
      <Droppable droppableId={status}>
        {(provided) => (
          <ColumnBody {...provided.droppableProps} ref={provided.innerRef} >
            {elements.map((element, index) => (
              <Task key={element.taskId} element={element} index={index} remove={remove} edit={edit} />
            ))}
            {provided.placeholder}
            {status === "ToDo" ? <TaskCreator add={add} /> : null}
          </ColumnBody>
        )}
      </Droppable>
    </TaskListColumnContainer>
  );
};
