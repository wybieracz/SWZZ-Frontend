import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { CardHeader, CardFooter, Buttons, DragItem } from "../styled/TaskStyled";
import { ActionButton } from "../styled/TaskListButtonsStyled";
import { DeleteIcon, EditIcon, OkIcon } from "../vectors/Icons";
import "../colors/Colors.js";
import { Green, GreenLight, Grey, GreyLight, GreyMedium, Raspberry, RaspberryLight } from "../colors/Colors.js";

export default function TaskCard({ element, index, remove, edit, setIsUnderEdit }) {
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
                        <span>{element.taskItemDTO.status}</span>
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