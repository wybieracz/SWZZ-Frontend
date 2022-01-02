import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { CardFooter, Buttons, DragItem } from "../styled/TaskStyled";
import { Form } from "react-bootstrap";

export default function TaskEditor ({ element, index, title, handleTitleChange, description, handleDescriptionChange, handleSubmit }) {
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
                    <Form>
                        <Form.Group className="mb-3" controlId="Title">
                            <Form.Control type="email" value={title} placeholder="Title" onChange={handleTitleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Description">
                            <Form.Control as="textarea" value={description} rows={3} placeholder="Description" onChange={handleDescriptionChange} />
                        </Form.Group>
                    </Form>
                    <CardFooter>
                    <span>{element.status}</span>
                    <Buttons>
                        <button onClick={handleSubmit}>Save</button>
                    </Buttons>
                    </CardFooter>
                </DragItem>
            );
        }}
        </Draggable>
    );
}