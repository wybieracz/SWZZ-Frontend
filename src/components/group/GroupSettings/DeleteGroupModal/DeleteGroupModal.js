import React from "react";
import { useNavigate } from "react-router";
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import {
    DeleteGroupHeader,
    DeleteGroupBody,
    DeleteGroupModalButtonWrapper,
    DeleteGroupModalButton,
    DeleteGroupModalButtonTextGreen,
    DeleteGroupModalButtonTextRed
} from "./DeleteGroupModalStyled"
axios.defaults.withCredentials = true;
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

export default function DeleteGroupModal(props) {

    const navigate = useNavigate();

    async function deleteGroupRequest() {
        try {
            await axios.delete(API_URL + "group?groupId=" + props.groupId).then(
                response => {
                    alert("Your group has been deleted.")
                    navigate("/")
                }
            );
        } catch (error) {
            console.error(error);
            alert("Something went wrong :(")
        }
    }

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
                    <DeleteGroupHeader>Group deletion</DeleteGroupHeader>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <DeleteGroupBody>Your group will be deleted. This process cannot be undone. Are you sure?</DeleteGroupBody>
            </Modal.Body>

            <Modal.Footer>
                <DeleteGroupModalButtonWrapper>
                    <DeleteGroupModalButton onClick={deleteGroupRequest}>
                        <DeleteGroupModalButtonTextGreen>Yes</DeleteGroupModalButtonTextGreen>
                    </DeleteGroupModalButton>
                    <DeleteGroupModalButton onClick={props.onHide}>
                        <DeleteGroupModalButtonTextRed>No</DeleteGroupModalButtonTextRed>
                    </DeleteGroupModalButton>
                </DeleteGroupModalButtonWrapper>
            </Modal.Footer>

        </Modal>
    );
}