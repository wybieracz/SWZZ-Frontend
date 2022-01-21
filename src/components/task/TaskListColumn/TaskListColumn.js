import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task";
import TaskCreator from "../TaskCreator/TaskCreator";
import React from "react";
import { ColumnHeader, ColumnBody, TaskListColumnContainer } from "./TaskListColumnStyled";

export default function TaskListColumn ({ elements, isPersonal, groupId, status, remove, edit, add, assign, getGroupUserById, groupUsers, groups, isGroupsLoaded }) {
  return (
    <TaskListColumnContainer>
      <ColumnHeader>{status}</ColumnHeader>
      <Droppable droppableId={status}>
        {(provided) => (
          <ColumnBody {...provided.droppableProps} ref={provided.innerRef} >
            {elements.map((element, index) => (
              <Task key={element.taskItemDTO.taskId}
                element={element}
                index={index}
                remove={remove}
                edit={edit}
                assign={assign}
                getGroupUserById={getGroupUserById}
                groupUsers={groupUsers}
                isPersonal={isPersonal}
                groups={groups}
                isGroupsLoaded={isGroupsLoaded}
              />
            ))}
            {provided.placeholder}
            {(!isPersonal && status === "ToDo") ? <TaskCreator groupId={groupId} add={add} /> : null}
          </ColumnBody>
        )}
      </Droppable>
    </TaskListColumnContainer>
  );
};
