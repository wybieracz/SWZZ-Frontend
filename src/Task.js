import useInputState from "./hooks/useInputState";
import React, { useState } from "react";
import TaskEditor from "./TaskEditor";
import TaskCard from "./TaskCard";

export default function Task ({ element, index, remove, edit }) {

    const [isUnderEdit, setIsUnderEdit] = useState(false);
    const [title, handleTitleChange, resetTitle] = useInputState(element.title);
    const [content, handleContentChange, resetContent] = useInputState(element.content);
    const handleSubmit = () => {
        edit(element.prefix, index, title, content);
        setIsUnderEdit(false);
    }

    if(isUnderEdit) {
        return (
            <TaskEditor element={element}
            index={index}
            title={title}
            handleTitleChange={handleTitleChange}
            content={content}
            handleContentChange={handleContentChange}
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