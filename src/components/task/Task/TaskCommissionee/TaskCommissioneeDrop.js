import React from "react";
import { TaskCommissioneeDropWrapper, TaskCommissioneeDropElement, TaskCommissioneeDot } from "./TaskCommissioneeStyled";
import { colorGenerator } from "../../../../colors/ColorGenerator";
import { unassignedGroupUser } from "../../DefaultData/DefaultData";

export default function TaskCommissioneeDrop({ element, index, assign, groupUsers, isDropActive, setIsDropActive }) {

    function handleClick(user) {
        assign(element.taskItemDTO.status, index, user.userDTO.userId);
        setIsDropActive(!isDropActive)
    }

    return(
        <TaskCommissioneeDropWrapper>
            {groupUsers.map((user, index) => (
                <TaskCommissioneeDropElement onClick={() => handleClick(user)} key={index} index={index}>
                    <TaskCommissioneeDot background={colorGenerator(user.userDTO)[0]} />
                    {user.userDTO.name} {user.userDTO.surname}
                </TaskCommissioneeDropElement>
            ))}
            <TaskCommissioneeDropElement onClick={() => handleClick(unassignedGroupUser)}>
                    <TaskCommissioneeDot background={colorGenerator(unassignedGroupUser.userDTO)[0]} />
                    Unassigned
            </TaskCommissioneeDropElement>
        </TaskCommissioneeDropWrapper>
    )
}