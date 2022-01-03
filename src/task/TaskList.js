import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskListColumn from "./TaskListColumn";
import { TaskListContainer, ListGrid, Separator } from "../styled/TaskListStyled";
import { defaultData } from "./DefaultData";
import { cutTask, pasteTask, editTask, getTasks, removeTaskRequest } from "./TaskListUtility";

const columns = ["ToDo", "Doing", "Closed"];

export default function TaskList() {
  
  const [elements, setElements] = useState(defaultData);

  useEffect(() => {
    getTasks(setElements);
  }, []);

  console.log(elements);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    else {
      const listCopy = { ...elements };
      const sourceList = listCopy[result.source.droppableId];
      const [removedElement, newSourceList] = cutTask(
        sourceList,
        result.source.index
      );
      listCopy[result.source.droppableId] = newSourceList;
      const destinationList = listCopy[result.destination.droppableId];

      listCopy[result.destination.droppableId] = pasteTask(
        destinationList,
        result.destination.droppableId,
        result.destination.index,
        removedElement
      );
      setElements(listCopy);
    }
  };

  const handleEditTask = (status, index, title, description, taskFailed) => {
    const listCopy = { ...elements };
    listCopy[status] = editTask(listCopy[status], index, title, description, taskFailed);
    setElements(listCopy);
  };

  const handleRemoveTask = (status, index) => {
    const listCopy = { ...elements };
    const result = listCopy[status];
    const removed = result.splice(index, 1);
    removeTaskRequest(removed[0].taskId);
    listCopy[status] = result;
    setElements(listCopy);
  };

  const handleAddTask = (element) => {
    const listCopy = { ...elements };
    listCopy["ToDo"].push(element);
    setElements(listCopy);
  }
  return (
    <TaskListContainer>
    <Separator />
      <DragDropContext onDragEnd={handleDragEnd}>
        <ListGrid>
          {columns.map((listKey) => (
            <TaskListColumn
              elements={elements[listKey]}
              key={listKey}
              status={listKey}
              remove={handleRemoveTask}
              edit={handleEditTask}
              add={handleAddTask}
            />
          ))}
        </ListGrid>
      </DragDropContext>
    </TaskListContainer>
  );
}