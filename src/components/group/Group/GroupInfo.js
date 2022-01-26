import React from "react";
import { Modal } from 'react-bootstrap';
import {
    GroupInfoHeader,
    GroupInfoBody
} from "./GroupStyled";

export default function GroupInfo(props) {

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
                        <GroupInfoHeader>{props.groupName} - About</GroupInfoHeader>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <GroupInfoBody>
                        {props.groupDescription}
                    </GroupInfoBody>
                </Modal.Body>
            </Modal>
        </>
    );
}