import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskListColumn from "../TaskListColumn/TaskListColumn";
import { emptyTasklist } from "../DefaultData/DefaultData";
import { cutTask, pasteTask, editTask, assignTask, getTasks, removeTaskRequest } from "./TaskListUtility";
import { ListGrid, Separator, TaskListWrapper, Footer } from "./TaskListStyled";
import { LoadingIconWrapper } from "../../images/Icons/IconsStyled";
import LoadingIcon from "../../../bitmaps/Load_Medium_Grey.png";

const columns = ["ToDo", "Doing", "Closed"];

export default function TaskList({ groupId, getGroupUserById, groupUsers }) {
  
  const [elements, setElements] = useState(emptyTasklist);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getTasks(setElements, setIsLoaded, groupId);
  }, [groupId]);

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

  const handleAssignTask = (status, index, commissioneeId) => {
    const listCopy = { ...elements };
    listCopy[status] = assignTask(listCopy[status], index, commissioneeId);
    console.log(listCopy)
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
    <>
    <TaskListWrapper>
    <Separator />
      {isLoaded ? 
          <DragDropContext onDragEnd={handleDragEnd}>
          <ListGrid>
            {columns.map((listKey) => (
              <TaskListColumn
                elements={elements[listKey]}
                key={listKey}
                groupId={groupId}
                status={listKey}
                remove={handleRemoveTask}
                edit={handleEditTask}
                add={handleAddTask}
                assign={handleAssignTask}
                getGroupUserById={getGroupUserById}
                groupUsers={groupUsers}
              />
            ))}
          </ListGrid>
        </DragDropContext>
      : <LoadingIconWrapper size="40px"><img src={LoadingIcon} alt="LoadingIcon" width="40px" heigth="40px" /></LoadingIconWrapper>}
    </TaskListWrapper>
    <Footer />
    </>
  );
}