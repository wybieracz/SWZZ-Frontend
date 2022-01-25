import React, { useEffect, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoadingIconWrapper } from "../../images/Icons/IconsStyled.js";
import LoadingIcon from "../../../bitmaps/Load_White.png";
import {
    JoinGroupForm,
    JoinGroupHeader,
    JoinGroupButtonWrapper,
    JoinGroupButton,
    JoinGroupItem,
    JoinGroupErrorText,
    JoinGroupButtonIconWrapper
} from "./JoinGroupModalStyled.js";
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

export default function JoinGroupModal(props) {

    const [groupCodeErr, setGroupCodeErr] = useState(true);
    const [valid, setValid] = useState(false);
    const [isRequestSent, setIsRequestSent] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        props.groupCode.length > 35 ? setGroupCodeErr(false) : setGroupCodeErr(true);
    }, [props.groupCode]);

    useEffect(() => {
        (groupCodeErr) ? setValid(false) : setValid(true);
    }, [groupCodeErr]);

    async function handleJoinGroup() {
        props.setValidated(true);
        if (valid) {
            setIsRequestSent(true)
            try {
                await axios.post(API_URL + "group/user?groupCode=" + props.groupCode).then(
                    response => {
                        props.getUserGroups(response.data)
                        navigate(`/group/${response.data}`)
                        props.onHide()
                        setIsRequestSent(false)
                    }
                );
            } catch (error) {
                console.error(error);
                setGroupCodeErr(true);
                setIsRequestSent(false)
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
                                    value={props.groupCode}
                                    onChange={(e) => props.setGroupCode(e.target.value)}
                                />
                                {props.validated && groupCodeErr && <JoinGroupErrorText>Please provide a valid code.</JoinGroupErrorText>}
                            </Form.Group>
                        </JoinGroupItem>
                    </JoinGroupForm>
                </Modal.Body>

                <Modal.Footer>
                    <JoinGroupButtonWrapper>
                        <JoinGroupButton onClick={handleJoinGroup}> { isRequestSent
                            ? <JoinGroupButtonIconWrapper>
                                <LoadingIconWrapper size="20px">
                                    <img src={LoadingIcon} alt="LoadingIcon" width="20px" heigth="20px" />
                                </LoadingIconWrapper>
                            </JoinGroupButtonIconWrapper>
                            : "Join group"
                            }
                        </JoinGroupButton>
                    </JoinGroupButtonWrapper>
                </Modal.Footer>

            </Modal>
        </div>
    );
}