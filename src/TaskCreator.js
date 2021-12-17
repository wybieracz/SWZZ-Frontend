import { TextField } from '@material-ui/core'
import useInputState from "./hooks/useInputState";
import React, { useState } from "react";
import { CardHeader, CardFooter, Buttons } from "./styled/TaskStyled";
import { TaskCreatorContainer } from "./styled/TaskCreatorStyled";
import { v4 as uuidv4 } from 'uuid';

export default function TaskCreator ({ add }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [title, handleTitleChange, resetTitle] = useInputState("");
    const [content, handleContentChange, resetContent] = useInputState("");
    const handleSubmit = () => {
        const element = {
            id: uuidv4(),
            prefix: "todo",
            title: title,
            content: content
        }
        add(element);
        setIsEnabled(false);
        resetTitle();
        resetContent();
    }
    const handleDiscard = () => {
        setIsEnabled(false);
        resetTitle();
        resetContent();
    }
    if(isEnabled) {
        return (
            <TaskCreatorContainer>
                <CardHeader><TextField margin="normal" label="Title" value={title} onChange={handleTitleChange} variant="outlined" fullWidth multiline/></CardHeader>
                <TextField margin="normal" label="Content" value={content} onChange={handleContentChange} variant="outlined" fullWidth multiline/>
                <CardFooter>
                <span>todo</span>
                <Buttons>
                    <button onClick={handleDiscard}>Discard</button>
                    <button onClick={handleSubmit}>Add</button>
                </Buttons>
                </CardFooter>
            </TaskCreatorContainer>
        )
    }
    else {
        return (<button onClick={() => setIsEnabled(true)}>+</button>);
    }
};