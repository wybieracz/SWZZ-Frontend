import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { CardFooter, Buttons, DragItem } from "./TaskStyled";
import { Form } from "react-bootstrap";
import { OkIcon } from "../../../vectors/Icons";
import { ActionButton } from "../TaskList/TaskListButtonsStyled";
import { Grey, GreyMedium } from "../../../colors/Colors.js";

export default function TaskEditor ({ element, index, title, handleTitleChange, description, handleDescriptionChange, handleSubmit }) {
    return (
        <Draggable draggableId={element.taskItemDTO.taskId.toString()} index={index}>
        {(provided, snapshot) => {
            return (
                <DragItem
                    ref={provided.innerRef}
                    snapshot={snapshot}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Form>
                        <Form.Group className="mb-3" controlId="Title">
                            <Form.Control type="email" value={title} placeholder="Title" onChange={handleTitleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Description">
                            <Form.Control as="textarea" value={description} rows={3} placeholder="Description" onChange={handleDescriptionChange} />
                        </Form.Group>
                    </Form>
                    <CardFooter>
                    <span>{element.taskItemDTO.status}</span>
                    <Buttons>
                        <ActionButton onClick={handleSubmit} background={Grey} hoverBackground={GreyMedium}><OkIcon /></ActionButton>
                    </Buttons>
                    </CardFooter>
                </DragItem>
            );
        }}
        </Draggable>
    );
}