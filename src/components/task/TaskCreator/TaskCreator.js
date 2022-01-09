import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import useInputState from "../../../hooks/useInputState";
import { createTaskRequest } from "../TaskList/TaskListUtility";
import { AddIcon, OkIcon, DeleteIcon } from "../../../vectors/Icons";
import { Grey, GreyMedium } from "../../../colors/Colors.js";
import { CardFooter, Buttons } from "../Task/TaskStyled";
import { TaskCreatorContainer } from "./TaskCreatorStyled";
import { ActionButton, AddButton } from "../TaskList/TaskListButtonsStyled";

export default function TaskCreator({ add }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [title, handleTitleChange, resetTitle] = useInputState("");
    const [description, handleDescriptionChange, resetDescription] = useInputState("");
    const handleSubmit = () => {
        const element = {
            "taskId": 0,
            "groupId": 0,
            "title": title,
            "description": description,
            "commissionerId": "string",
            "commissioneeId": "string",
            "deadline": 0,
            "startTime": 0,
            "estimatedExecutionTime": 0,
            "status": "ToDo",
            "taskFailed": false
        }
        createTaskRequest(element, add);
        setIsEnabled(false);
        resetTitle();
        resetDescription();
    }
    const handleDiscard = () => {
        setIsEnabled(false);
        resetTitle();
        resetDescription();
    }

    function onKeyDown(event) {
        if (event.key === "Enter" || event.key === "NumpadEnter") {
            handleSubmit();
        }
    }

    if (isEnabled) {
        return (
            <TaskCreatorContainer onKeyDown={onKeyDown}>
                <Form>
                    <Form.Group className="mb-3" controlId="Title">
                        <Form.Control type="email" placeholder="Title" onChange={handleTitleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Description">
                        <Form.Control as="textarea" rows={3} placeholder="Description" onChange={handleDescriptionChange} />
                    </Form.Group>
                </Form>
                <CardFooter>
                    <span>ToDo</span>
                    <Buttons>
                        <ActionButton onClick={handleDiscard} background={Grey} hoverBackground={GreyMedium}><DeleteIcon /></ActionButton>
                        <ActionButton onClick={handleSubmit} background={Grey} hoverBackground={GreyMedium}><OkIcon /></ActionButton>
                    </Buttons>
                </CardFooter>
            </TaskCreatorContainer>
        )
    }
    else {
        return (<AddButton onClick={() => setIsEnabled(true)} background={Grey} hoverBackground={GreyMedium}><AddIcon /></AddButton>);
    }
};