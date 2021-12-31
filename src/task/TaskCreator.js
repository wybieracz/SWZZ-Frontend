import useInputState from "../hooks/useInputState";
import React, { useState } from "react";
import { CardFooter, Buttons } from "../styled/TaskStyled";
import { TaskCreatorContainer } from "../styled/TaskCreatorStyled";
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap';

export default function TaskCreator ({ add }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [title, handleTitleChange, resetTitle] = useInputState("");
    const [description, handleDescriptionChange, resetDescription] = useInputState("");
    const handleSubmit = () => {
        const element = {
            id: uuidv4(),
            prefix: "todo",
            title: title,
            description: description
        }
        add(element);
        setIsEnabled(false);
        resetTitle();
        resetDescription();
    }
    const handleDiscard = () => {
        setIsEnabled(false);
        resetTitle();
        resetDescription();
    }
    if(isEnabled) {
        return (
            <TaskCreatorContainer>
                <Form>
                    <Form.Group className="mb-3" controlId="Title">
                        <Form.Control type="email" placeholder="Title" onChange={handleTitleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Description">
                        <Form.Control as="textarea" rows={3} placeholder="Description" onChange={handleDescriptionChange} />
                    </Form.Group>
                </Form>
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