import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import TaskCreator from "./TaskCreator";
import React from "react";
import { ColumnHeader, ColumnBody, TaskListColumnContainer } from "../styled/TaskListColumnStyled";

export default function TaskListColumn ({ prefix, elements, remove, edit, add }) {
  return (
    <TaskListColumnContainer>
      <ColumnHeader>{prefix}</ColumnHeader>
      <Droppable droppableId={prefix}>
        {(provided) => (
          <ColumnBody {...provided.droppableProps} ref={provided.innerRef} >
            {elements.map((element, index) => (
              <Task key={element.id} element={element} index={index} remove={remove} edit={edit} />
            ))}
            {provided.placeholder}
            {prefix === "todo" ? <TaskCreator add={add} /> : null}
          </ColumnBody>
        )}
      </Droppable>
    </TaskListColumnContainer>
  );
};
