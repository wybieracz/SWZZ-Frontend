import React from "react";
import { Modal } from 'react-bootstrap';
import {
    NewGroupHeader,
    NewGroupBody,
    NewGroupButtonWrapper,
    NewGroupButton,
    NewGroupButtonText
} from "./NewGroupModalStyled.js";

export default function NewGroupModal(props) {
    return (
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
                    <NewGroupHeader>New group</NewGroupHeader>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <NewGroupBody>Please select your option.</NewGroupBody>
            </Modal.Body>

            <Modal.Footer>
                <NewGroupButtonWrapper>
                    <NewGroupButton onClick={props.handleCreateGroup}>
                        Create a new group
                    </NewGroupButton>
                    <NewGroupButton onClick={props.handleJoinGroup}>
                        Join an existing group
                    </NewGroupButton>
                </NewGroupButtonWrapper>
            </Modal.Footer>

        </Modal>
    );
}

