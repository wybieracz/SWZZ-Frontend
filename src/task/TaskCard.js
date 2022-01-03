import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { CardHeader, CardFooter, Buttons, DragItem } from "../styled/TaskStyled";
import { ActionButton } from "../styled/TaskListButtonsStyled";
import { DeleteIcon, EditIcon, OkIcon } from "../vectors/Icons";

export default function TaskCard({ element, index, remove, edit, setIsUnderEdit }) {
    const handleTaskFailedToggle = () => {
        edit(element.status, index, element.title, element.description, !element.taskFailed);
    }
    return (
        <Draggable draggableId={element.taskId.toString()} index={index}>
            {(provided, snapshot) => {
                return (
                    <DragItem
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <CardHeader>{element.title}</CardHeader>
                        <span>{element.description}</span>
                        <CardFooter>
                        <span>{element.status}</span>
                        <Buttons>
                            <ActionButton onClick={() => remove(element.status, index)} background="#E4E4E4" hoverBackground="#D1D1D1"><DeleteIcon /></ActionButton>
                            <ActionButton onClick={() => setIsUnderEdit(true)} background="#E4E4E4" hoverBackground="#D1D1D1"><EditIcon /></ActionButton>
                            {element.status === "Closed" ? (element.taskFailed ?
                                <ActionButton onClick={handleTaskFailedToggle} background="#FF2C4B" hoverBackground="#D8002A"><DeleteIcon /></ActionButton> : 
                                <ActionButton onClick={handleTaskFailedToggle} background="#53A548" hoverBackground="#3F7735"><OkIcon /></ActionButton> )
                            : null}
                        </Buttons>
                        </CardFooter>
                    </DragItem>
                );
            }}
        </Draggable>
    );
}