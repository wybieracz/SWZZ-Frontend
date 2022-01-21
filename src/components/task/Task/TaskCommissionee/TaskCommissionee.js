import React, { useState, useEffect } from "react";
import { TaskCommissioneeButton, TaskCommissioneeWrapper } from "./TaskCommissioneeStyled.js";
import { colorGenerator } from "../../../../colors/ColorGenerator.js"
import TaskCommissioneeDrop from "./TaskCommissioneeDrop";

export default function TaskCommissionee({ element, index, assign, getGroupUserById, groupUsers }) {

    const [isDropActive, setIsDropActive] = useState(false);
    const [commissionee, setCommissionee] = useState(() => (getGroupUserById(element.taskItemDTO.commissioneeId)));

    useEffect(() => {
        setCommissionee(getGroupUserById(element.taskItemDTO.commissioneeId));
    }, [groupUsers, element, getGroupUserById]);

    return(
        <TaskCommissioneeWrapper>
            <TaskCommissioneeButton onClick={() => setIsDropActive(!isDropActive)} background={colorGenerator(commissionee.userDTO)}>
                {commissionee.userDTO.name + " " + commissionee.userDTO.surname}
            </TaskCommissioneeButton>
            { isDropActive ?
                <TaskCommissioneeDrop element={element}
                    index={index}
                    assign={assign}
                    groupUsers={groupUsers}
                    isDropActive={isDropActive}
                    setIsDropActive={setIsDropActive}
                    />
            : null }
        </TaskCommissioneeWrapper>
    )
}