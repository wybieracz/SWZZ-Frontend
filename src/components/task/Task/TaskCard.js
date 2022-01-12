
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { DeleteIcon, EditIcon, OkIcon } from "../../../vectors/Icons";
import { Green, GreenLight, Grey, GreyLight, GreyMedium, Raspberry, RaspberryLight } from "../../../colors/Colors.js";
import { CardHeader, CardFooter, Buttons, DragItem, CommissioneeButton } from "./TaskStyled";
import { ActionButton } from "../TaskList/TaskListButtonsStyled";
import colorGenerator from "../../../colors/ColorGenerator.js"

export default function TaskCard({ element, index, remove, edit, setIsUnderEdit, getGroupUserById }) {
    const commissionee = getGroupUserById(element.taskItemDTO.commissionerId);
    const commissioner = getGroupUserById(element.taskItemDTO.commissionerId);
    console.log(commissionee);
    const handleTaskFailedToggle = () => {
        edit(element.taskItemDTO.status, index, element.taskItemDTO.title, element.taskItemDTO.description, !element.taskItemDTO.taskFailed);
    }
    return (
        <Draggable draggableId={element.taskItemDTO.taskId.toString()} index={index}>
            {(provided, snapshot) => {
                return (
                    <DragItem
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <CardHeader>{element.taskItemDTO.title}</CardHeader>
                        <span>{element.taskItemDTO.description}</span>
                        <CardFooter>
                        <CommissioneeButton background={colorGenerator(commissionee.userDTO)}>
                            {commissioner.userDTO.name + " " + commissioner.userDTO.surname}
                        </CommissioneeButton>
                        <Buttons>
                            <ActionButton onClick={() => remove(element.taskItemDTO.status, index)}
                                disabled={!element.taskPermissions.canDelete}
                                background={Grey}
                                hoverBackground={GreyMedium}
                                disabledBackground={GreyLight}>
                                <DeleteIcon />
                            </ActionButton>
                            <ActionButton onClick={() => setIsUnderEdit(true)}
                                disabled={!element.taskPermissions.canEditAttributes}
                                background={Grey}
                                hoverBackground={GreyMedium}
                                disabledBackground={GreyLight}>
                                <EditIcon />
                            </ActionButton>
                            {element.taskItemDTO.status === "Closed" ? (element.taskItemDTO.taskFailed ?
                                <ActionButton onClick={handleTaskFailedToggle}
                                    disabled={!element.taskPermissions.canEditAttributes}
                                    background={RaspberryLight}
                                    hoverBackground={Raspberry}
                                    disabledBackground={RaspberryLight}>
                                    <DeleteIcon />
                                </ActionButton> : 
                                <ActionButton onClick={handleTaskFailedToggle}
                                disabled={!element.taskPermissions.canEditAttributes}
                                background={GreenLight}
                                hoverBackground={Green}
                                disabledBackground={GreenLight}>
                                <OkIcon />
                                </ActionButton> )
                            : null}
                        </Buttons>
                        </CardFooter>
                    </DragItem>
                );
            }}
        </Draggable>
    );
}