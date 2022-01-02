import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { CardHeader, CardFooter, Buttons, DragItem } from "../styled/TaskStyled";
import { ActionButton } from "../styled/TaskListButtonsStyled";
import { DeleteIcon, EditIcon } from "../vectors/Icons";

export default function TaskCard({ element, index, remove, setIsUnderEdit }) {
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
                            <ActionButton onClick={() => remove(element.status, index)}><DeleteIcon /></ActionButton>
                            <ActionButton onClick={() => setIsUnderEdit(true)}><EditIcon /></ActionButton>
                        </Buttons>
                        </CardFooter>
                    </DragItem>
                );
            }}
        </Draggable>
    );
}