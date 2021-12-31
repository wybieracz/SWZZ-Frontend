const cutTask = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};
  
const pasteTask = (list, prefix, index, element) => {
  const newElement = {...element, prefix: prefix};
  const result = Array.from(list);
  result.splice(index, 0, newElement);
  return result;
};

const editTask = (list, index, title, description) => {
  const editedElement = { ...list[index], title: title, description: description};
  const result = Array.from(list);
  result.splice(index, 1, editedElement);
  return result;
};

export { cutTask, pasteTask, editTask };