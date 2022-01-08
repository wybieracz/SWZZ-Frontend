import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskListColumn from "./TaskListColumn";
import { ListGrid, Separator, TaskListWrapper, TaskListWrapperHeader, TasklistWrapperContent, TasklistWrapperFooter } from "../styled/TaskListStyled";
import { defaultData } from "./DefaultData";
import { cutTask, pasteTask, editTask, getTasks, removeTaskRequest } from "./TaskListUtility";
import { LoadingIconWrapper } from "../styled/IconsStyled";
import LoadingIcon from "../bitmaps/Load_Medium_Grey.png";

const columns = ["ToDo", "Doing", "Closed"];

export default function TaskList() {
  
  const [elements, setElements] = useState(defaultData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getTasks(setElements, setIsLoaded);
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
    removeTaskRequest(removed[0].taskItemDTO.taskId);
    listCopy[status] = result;
    setElements(listCopy);
  };

  const handleAddTask = (element) => {
    const listCopy = { ...elements };
    listCopy["ToDo"].push(element);
    setElements(listCopy);
  }
  return (
    <TaskListWrapper>
    <Separator />
      {isLoaded ? 
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
      : <LoadingIconWrapper size="40px"><img src={LoadingIcon} alt="LoadingIcon" width="40px" heigth="40px" /></LoadingIconWrapper>}
    </TaskListWrapper>
  );
}