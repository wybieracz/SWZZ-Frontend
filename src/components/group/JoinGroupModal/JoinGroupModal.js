import React, { useEffect, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    JoinGroupForm,
    JoinGroupHeader,
    JoinGroupButtonWrapper,
    JoinGroupButton,
    JoinGroupItem,
    JoinGroupErrorText
} from "./JoinGroupModalStyled.js";
axios.defaults.withCredentials = true;
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

export default function JoinGroupModal(props) {

    const [groupCode, setGroupCode] = useState("");
    const [groupCodeErr, setGroupCodeErr] = useState(true);
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        groupCode.length > 0 ? setGroupCodeErr(false) : setGroupCodeErr(true);
    }, [groupCode]);

    useEffect(() => {
        (groupCodeErr) ? setValid(false) : setValid(true);
    }, [groupCodeErr]);

    async function handleJoinGroup() {
        props.setValidated(true);
        if (valid) {
            try {
                await axios.post(API_URL + "group/user?groupCode=" + groupCode).then(
                    response => {
                        navigate(`/group/${response.data}`)
                        alert("You have successfully joined the group.")
                    }
                );
            } catch (error) {
                console.error(error);
                setGroupCodeErr(true);
            }
        }
    }

    function onKeyDown(event) {
        if (event.key === "Enter" || event.key === "NumpadEnter") {
            handleJoinGroup();
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
                        <JoinGroupHeader>Join group</JoinGroupHeader>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <JoinGroupForm>
                        <JoinGroupItem>
                            <Form.Group controlId="GroupCode" size="lg">
                                <Form.Label>Group code</Form.Label>
                                <Form.Control
                                    placeholder="Code"
                                    type="text"
                                    value={groupCode}
                                    onChange={(e) => setGroupCode(e.target.value)}
                                />
                                {props.validated && groupCodeErr && <JoinGroupErrorText>Please provide a valid code.</JoinGroupErrorText>}
                            </Form.Group>
                        </JoinGroupItem>
                    </JoinGroupForm>
                </Modal.Body>

                <Modal.Footer>
                    <JoinGroupButtonWrapper>
                        <JoinGroupButton onClick={handleJoinGroup}>
                            Join group
                        </JoinGroupButton>
                    </JoinGroupButtonWrapper>
                </Modal.Footer>

            </Modal>
        </div>
    );
}