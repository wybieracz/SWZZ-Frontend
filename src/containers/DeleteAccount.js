import React from "react";
import { useNavigate } from "react-router";
import { Modal } from 'react-bootstrap';
import { DeleteAccountHeader, DeleteAccountBody, DeleteAccountModalButtonWrapper, DeleteAccountModalButton, DeleteAccountModalButtonTextGreen, DeleteAccountModalButtonTextRed } from "../styled/DeleteAccountStyled"

export default function DeleteAccount(props) {

    const navigate = useNavigate();

    function DeleteAccount() {
        alert("Your account has been deleted.")
        localStorage.clear()
        navigate("/")
    }

    return (
        <Modal
            {...props}
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
                <DeleteAccountBody>Your account will be deleted. This process cannot be undone. Are you sure?</DeleteAccountBody>
            </Modal.Body>

            <Modal.Footer>
                <DeleteAccountModalButtonWrapper>
                    <DeleteAccountModalButton onClick={DeleteAccount}>
                        <DeleteAccountModalButtonTextGreen>Yes</DeleteAccountModalButtonTextGreen>
                    </DeleteAccountModalButton>
                    <DeleteAccountModalButton onClick={props.onHide}>
                        <DeleteAccountModalButtonTextRed>No</DeleteAccountModalButtonTextRed>
                    </DeleteAccountModalButton>
                </DeleteAccountModalButtonWrapper>
            </Modal.Footer>

        </Modal>
    );
}