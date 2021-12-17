import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { CardHeader, CardFooter, Buttons, DragItem } from "./styled/TaskStyled";

export default function TaskCard({ element, index, remove, setIsUnderEdit }) {
    return (
        <Draggable draggableId={element.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <DragItem
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <CardHeader>{element.title}</CardHeader>
                        <span>{element.content}</span>
                        <CardFooter>
                        <span>{element.prefix}</span>
                        <Buttons>
                            <button onClick={() => remove(element.prefix, index)}>Delete</button>
                            <button onClick={() => setIsUnderEdit(true)}>Edit</button>
                        </Buttons>
                        </CardFooter>
                    </DragItem>
                );
            }}
        </Draggable>
    );
}