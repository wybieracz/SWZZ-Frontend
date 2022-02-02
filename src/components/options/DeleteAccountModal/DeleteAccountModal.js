import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Modal } from 'react-bootstrap';
import { Raspberry, RaspberryLight, Green, GreenLight } from "../../../colors/Colors";
import {
    DeleteAccountHeader,
    DeleteAccountBody,
    DeleteAccountModalButtonWrapper,
    DeleteAccountModalButton
} from "./DeleteAccountModalStyled";
import { LoadingIconWrapper } from "../../images/Icons/IconsStyled.js";
import LoadingIcon from "../../../bitmaps/Load_White.png";
import { ButtonIconWrapper } from "../Options/OptionsStyled";
import axios from 'axios';
axios.defaults.withCredentials = true;
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

export default function DeleteAccountModal(props) {

    const [isRequestSent, setIsRequestSent] = useState(false);

    const navigate = useNavigate();

    async function handleDeleteAccount() {
        setIsRequestSent(true)
        try {
            await axios.delete(API_URL + "user").then(
                response => {
                    setIsRequestSent(false)
                    props.clearUserAndGroups()
                    props.setIsLogged(false)
                    localStorage.clear()
                    navigate("/")
                    alert("Your account has been deleted.")
                }
            );
        } catch (error) {
            console.error(error);
            setIsRequestSent(false)
            alert("Something went wrong :(")
        }

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
                            { isRequestSent
                                ? <ButtonIconWrapper>
                                    <LoadingIconWrapper size="20px"><img src={LoadingIcon} alt="LoadingIcon" width="20px" heigth="20px" /></LoadingIconWrapper>
                                </ButtonIconWrapper>
                                : "Yes"
                            }
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