
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { DeleteIcon, EditIcon, OkIcon } from "../../../vectors/Icons";
import { Green, GreenLight, Grey, GreyLight, GreyMedium, Raspberry, RaspberryLight } from "../../../colors/Colors.js";
import { CardHeader, CardFooter, Buttons, DragItem } from "./TaskStyled";
import TaskCommissionee from "./TaskCommissionee";
import { ActionButton } from "../TaskList/TaskListButtonsStyled";

export default function TaskCard({ element, index, remove, edit, assign, setIsUnderEdit, getGroupUserById, groupUsers }) {
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
                        <TaskCommissionee element={element}
                            index={index}
                            assign={assign}
                            getGroupUserById={getGroupUserById}
                            groupUsers={groupUsers}
                        />
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