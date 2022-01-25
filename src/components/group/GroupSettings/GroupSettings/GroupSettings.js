import React from "react";
import { Modal } from 'react-bootstrap';
import {
    GroupSettingsHeader,
    GroupSettingsButtonWrapper,
    GroupSettingsButton,
    GroupSettingsDeleteButton
} from "./GroupSettingsStyled";

export default function GroupSettings(props) {

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <GroupSettingsHeader>{props.groupName} - Settings</GroupSettingsHeader>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <GroupSettingsButtonWrapper>
                        <GroupSettingsButton onClick={props.handlePeekGroupCode}>
                            Peek group code
                        </GroupSettingsButton>
                        <GroupSettingsButton onClick={props.handleEditGroupAttributes}>
                            Edit group attributes
                        </GroupSettingsButton>
                        <GroupSettingsDeleteButton onClick={props.handleDeleteGroup}>
                            Delete group
                        </GroupSettingsDeleteButton>
                    </GroupSettingsButtonWrapper>
                </Modal.Body>
            </Modal>
        </>
    );
}