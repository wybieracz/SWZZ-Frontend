import React, { useState, useEffect } from "react";
import { TaskGroupButton, TaskGroupWrapper } from "./TaskGroupStyled.js";
import { groupColorGenerator } from "../../../../colors/ColorGenerator.js"
import { useNavigate } from 'react-router-dom';
import unknown from "../../../group/DefaultData/DefaultData.js";

export default function TaskGroup({ element, groups, isGroupsLoaded }) {

    const [group, setGroup] = useState(() => getGroupById(element.taskItemDTO.groupId));
    const navigate = useNavigate();

    function navigateToGroup() {
        navigate(`/group/${element.taskItemDTO.groupId}`)
    }

    function getGroupById(groups, groupId) {
        if(isGroupsLoaded && groups.length > 0) {
            const result = groups.filter(group => group.groupDTO.groupId === groupId);
            if (result.length > 0) return result[0]
            else return unknown
        } else return unknown
    }

    function handleGroupName(name) {
        const result = `${name}`
        if(result.length < 25) return result
        else return `${result.slice(0,24)}..`
    }

    useEffect(() => {
        setGroup(getGroupById(groups, element.taskItemDTO.groupId));
    }, [element, groups, isGroupsLoaded]);

    return(
        <TaskGroupWrapper>
            <TaskGroupButton onClick={navigateToGroup} background={groupColorGenerator(element.taskItemDTO.groupId)}>
            {handleGroupName(group.groupDTO.name)}
            </TaskGroupButton>
        </TaskGroupWrapper>
    )
}