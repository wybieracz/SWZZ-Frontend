import { Draggable } from "react-beautiful-dnd";
import { TextField } from '@material-ui/core'
import React from "react";
import { CardHeader, CardFooter, Buttons, DragItem } from "./styled/TaskStyled";

export default function TaskEditor ({ element, index, title, handleTitleChange, content, handleContentChange, handleSubmit }) {
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
                    <CardHeader><TextField margin="normal" value={title} onChange={handleTitleChange} fullWidth multiline/></CardHeader>
                    <TextField margin="normal" value={content} onChange={handleContentChange} fullWidth multiline/>
                    <CardFooter>
                    <span>{element.prefix}</span>
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