import { defaultData } from "./DefaultData";
import axios from "axios";
axios.defaults.withCredentials = true;

const cutTask = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};
  
const pasteTask = (list, status, index, element) => {
  const newElement = {...element, status: status};
  editTaskRequest(newElement);
  const result = Array.from(list);
  result.splice(index, 0, newElement);
  return result;
};

const editTask = (list, index, title, description) => {
  const editedElement = { ...list[index], title: title, description: description};
  editTaskRequest(editedElement);
  const result = Array.from(list);
  result.splice(index, 1, editedElement);
  return result;
};

const checkStatus = (status) => {
  return function(element) {
    if(element.status === status) return true;
    else return false;
  }
}

async function getTasks(setElements) {
  try {
    await axios.get("https://dev-swzz-be-app.azurewebsites.net/api/TaskItems/0").then(
      response => {
        const result = {
          ToDo: (response.data).filter(checkStatus("ToDo")),
          Doing: (response.data).filter(checkStatus("Doing")),
          Closed: (response.data).filter(checkStatus("Closed"))
        };
        setElements(result);
     }
    );
  } catch (error) {
    console.error(error);
    setElements(defaultData);
  }
}

async function removeTaskRequest(taskId) {
  try {
    await axios.delete("https://dev-swzz-be-app.azurewebsites.net/api/TaskItems/" + `${taskId}`)
  } catch (error) {
    console.error(error);
  }
}

async function editTaskRequest(task) {
  try {
    await axios.put("https://dev-swzz-be-app.azurewebsites.net/api/TaskItems/" + `${task.taskId}`, task)
  } catch (error) {
    console.error(error);
  }
}

async function createTaskRequest(task, add) {
  try {
    await axios.post("https://dev-swzz-be-app.azurewebsites.net/api/TaskItems/", task).then(
      response => {
        add(response.data);
     }
    );
  } catch (error) {
    console.error(error);
  }
}

export { cutTask, pasteTask, editTask, getTasks, removeTaskRequest, createTaskRequest };