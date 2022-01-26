import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { LoadingIconWrapper } from "../../../images/Icons/IconsStyled.js";
import LoadingIcon from "../../../../bitmaps/Load_White.png";
import { Raspberry, RaspberryLight, Green, GreenLight } from "../../../../colors/Colors";
import {
    DeleteGroupHeader,
    DeleteGroupBody,
    DeleteGroupModalButtonWrapper,
    DeleteGroupModalButton
} from "./DeleteGroupModalStyled"

axios.defaults.withCredentials = true;
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

export default function DeleteGroupModal(props) {

    const [isRequestSent, setIsRequestSent] = useState(false);

    const navigate = useNavigate();

    async function deleteGroupRequest() {
        setIsRequestSent(true)
        try {
            await axios.delete(API_URL + "group?groupId=" + props.groupId).then(
                response => {
                    props.getUserGroups(0)
                    navigate("/")
                }
            );
        } catch (error) {
            console.error(error);
            setIsRequestSent(false)
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
                <DeleteGroupBody>Your group will be deleted. <br />This process cannot be undone. Are you sure?</DeleteGroupBody>
            </Modal.Body>

            <Modal.Footer>
                <DeleteGroupModalButtonWrapper>
                    <DeleteGroupModalButton onClick={deleteGroupRequest} background={GreenLight} backgroundHover={Green} >
                        { isRequestSent
                            ? <LoadingIconWrapper size="20px"><img src={LoadingIcon} alt="LoadingIcon" width="20px" heigth="20px" /></LoadingIconWrapper>
                            : "Yes"
                        }
                    </DeleteGroupModalButton>
                    <DeleteGroupModalButton onClick={props.onHide} background={RaspberryLight} backgroundHover={Raspberry}>No</DeleteGroupModalButton>
                </DeleteGroupModalButtonWrapper>
            </Modal.Footer>

        </Modal>
    );
}