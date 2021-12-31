import useInputState from "../hooks/useInputState";
import React, { useState } from "react";
import TaskEditor from "./TaskEditor";
import TaskCard from "./TaskCard";

export default function Task ({ element, index, remove, edit }) {

    const [isUnderEdit, setIsUnderEdit] = useState(false);
    const [title, handleTitleChange, resetTitle] = useInputState(element.title);
    const [description, handleDescriptionChange, resetDescription] = useInputState(element.description);
    const handleSubmit = () => {
        edit(element.prefix, index, title, description);
        setIsUnderEdit(false);
    }

    if(isUnderEdit) {
        return (
            <TaskEditor element={element}
            index={index}
            title={title}
            handleTitleChange={handleTitleChange}
            description={description}
            handleDescriptionChange={handleDescriptionChange}
            handleSubmit={handleSubmit} />
        )
    }
    else {
        return (
            <TaskCard element={element}
            index={index}
            remove={remove}
            setIsUnderEdit={setIsUnderEdit} />
        );
    }
};