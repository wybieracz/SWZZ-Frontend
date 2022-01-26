import React from "react";
import { useNavigate } from "react-router";
import { Modal } from 'react-bootstrap';
import { Raspberry, RaspberryLight, Green, GreenLight } from "../../../colors/Colors";
import {
    DeleteAccountHeader,
    DeleteAccountBody,
    DeleteAccountModalButtonWrapper,
    DeleteAccountModalButton
} from "./DeleteAccountModalStyled"

export default function DeleteAccountModal(props) {

    const navigate = useNavigate();

    function handleDeleteAccount() {
        alert("Your account has been deleted.")
        localStorage.clear()
        navigate("/")
    }

    function onKeyDown(event) {
        if (event.key === "Enter" || event.key === "NumpadEnter") {
            handleDeleteAccount();
        }
    }

    return (
        <div onKeyDown={onKeyDown}>
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
                        <DeleteAccountHeader>Account deletion</DeleteAccountHeader>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <DeleteAccountBody>Your account will be deleted. <br />This process cannot be undone. Are you sure?</DeleteAccountBody>
                </Modal.Body>

                <Modal.Footer>
                    <DeleteAccountModalButtonWrapper>
                        <DeleteAccountModalButton onClick={handleDeleteAccount} background={GreenLight} backgroundHover={Green}>
                            Yes
                        </DeleteAccountModalButton>
                        <DeleteAccountModalButton onClick={props.onHide} background={RaspberryLight} backgroundHover={Raspberry}>
                            No
                        </DeleteAccountModalButton>
                    </DeleteAccountModalButtonWrapper>
                </Modal.Footer>

            </Modal>
        </div>
    );
}