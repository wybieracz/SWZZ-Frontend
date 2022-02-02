import React, { useState } from "react";
import useInputState from "../../../hooks/useInputState";
import TaskEditor from "./TaskEditor";
import TaskCard from "./TaskCard";

export default function Task ({ element, index, remove, edit, assign, getGroupUserById, groupUsers, isPersonal, groups, isGroupsLoaded }) {

    const [isUnderEdit, setIsUnderEdit] = useState(false);
    const [title, handleTitleChange] = useInputState(element.taskItemDTO.title);
    const [description, handleDescriptionChange] = useInputState(element.taskItemDTO.description);
    const handleSubmit = () => {
        edit(element.taskItemDTO.status, index, title, description, element.taskItemDTO.taskFailed);
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
            handleSubmit={handleSubmit}
            getGroupUserById={getGroupUserById}
            groupUsers={groupUsers}
            assign={assign}
            isPersonal={isPersonal}
            groups={groups}
            isGroupsLoaded={isGroupsLoaded}
            />
        )
    }
    else {
        return (
            <TaskCard element={element}
            index={index}
            remove={remove}
            edit={edit}
            assign={assign}
            setIsUnderEdit={setIsUnderEdit}
            getGroupUserById={getGroupUserById}
            groupUsers={groupUsers}
            isPersonal={isPersonal}
            groups={groups}
            isGroupsLoaded={isGroupsLoaded}
            />
        );
    }
};