import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskListColumn from "./TaskListColumn";
import { TaskListContainer, ListGrid } from "../styled/TaskListStyled";
import { testData } from "./testData";
import { cutTask, pasteTask, editTask } from "./TaskListUtility";
import axios from "axios";

axios.defaults.withCredentials = true;
const columns = ["todo", "doing", "closed"];

async function getTasks() {

  try {
    const response = await axios.get("https://dev-swzz-be-app.azurewebsites.net/api/TaskItems/0");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default function TaskList() {

  const [elements, setElements] = useState(testData);
<<<<<<< HEAD
  useEffect(() => {
    getTasks();
  }, []);
=======
>>>>>>> develop

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

  const handleEditTask = (prefix, index, title, description) => {
    const listCopy = { ...elements };
    listCopy[prefix] = editTask(listCopy[prefix], index, title, description);
    setElements(listCopy);
  };

  const handleRemoveTask = (prefix, index) => {
    const listCopy = { ...elements };
    const result = listCopy[prefix];
    result.splice(index, 1);
    listCopy[prefix] = result;
    setElements(listCopy);
  };

  const handleAddTask = (element) => {
    const listCopy = { ...elements };
    listCopy["todo"].push(element);
    setElements(listCopy);
  }

  return (
    <TaskListContainer>
      <DragDropContext onDragEnd={handleDragEnd}>
        <ListGrid>
          {columns.map((listKey) => (
            <TaskListColumn
              elements={elements[listKey]}
              key={listKey}
              prefix={listKey}
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