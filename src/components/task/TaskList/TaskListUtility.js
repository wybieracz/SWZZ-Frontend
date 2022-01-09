import { defaultData } from "../DefaultData/DefaultData";
import axios from "axios";
axios.defaults.withCredentials = true;
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

const cutTask = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};
  
const pasteTask = (list, status, index, element) => {
  const newElement = {
    taskItemDTO:{...element.taskItemDTO, status: status},
    taskPermissions:{...element.taskPermissions}
  };
  console.log(newElement);
  editTaskRequest(newElement);
  const result = Array.from(list);
  result.splice(index, 0, newElement);
  return result;
};

const editTask = (list, index, title, description, taskFailed) => {
  const editedElement = {
    taskItemDTO: {...list[index].taskItemDTO, title: title, description: description, taskFailed: taskFailed},
    taskPermissions:{...list[index].taskPermissions}
  };
  editTaskRequest(editedElement);
  const result = Array.from(list);
  result.splice(index, 1, editedElement);
  return result;
};

const checkStatus = (status) => {
  return function(element) {
    if(element.taskItemDTO.status === status) return true;
    else return false;
  }
}

async function getTasks(setElements, setIsLoaded) {
  try {
    await axios.get(API_URL + "group/tasks?groupId=0").then(
      response => {
        const result = {
          ToDo: (response.data).filter(checkStatus("ToDo")),
          Doing: (response.data).filter(checkStatus("Doing")),
          Closed: (response.data).filter(checkStatus("Closed"))
        };
        setElements(result);
        setIsLoaded(true);
     }
    );
  } catch (error) {
    console.error(error);
    setElements(defaultData);
    setIsLoaded(true);
  }
}

async function removeTaskRequest(taskId) {
  try {
    await axios.delete(API_URL + "task?id=" + `${taskId}`)
  } catch (error) {
    console.error(error);
  }
}

async function editTaskRequest(task) {
  try {
    await axios.put(API_URL + "task", task)
  } catch (error) {
    console.error(error);
  }
}

async function createTaskRequest(task, add) {
  try {
    await axios.post(API_URL + "task", task).then(
      response => {
        add(response.data);
     }
    );
  } catch (error) {
    console.error(error);
  }
}

export { cutTask, pasteTask, editTask, getTasks, removeTaskRequest, createTaskRequest };