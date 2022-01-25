import React, { useEffect, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import {
    EditGroupAttributesForm,
    EditGroupAttributesHeader,
    EditGroupAttributesButtonWrapper,
    EditGroupAttributesButton,
    EditGroupAttributesButtonText,
    EditGroupAttributesItem,
    EditGroupAttributesEmojiItem,
    EditGroupAttributesLabel,
    EditGroupAttributesEmojiWrapper,
    EditGroupAttributesEmojiButtonEmoji,
    EditGroupAttributesErrorText
} from "./EditGroupAttributesModalStyled.js";
axios.defaults.withCredentials = true;
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

export default function EditGroupAttributesModal(props) {

    const [groupName, setGroupName] = useState("");
    const [groupDescription, setGroupDescription] = useState("");

    const [groupNameErr, setGroupNameErr] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        groupName.length > 0 ? setGroupNameErr(false) : setGroupNameErr(true);
    }, [groupName]);

    async function EditGroupAttributesChangeRequest() {
        props.setValidated(true);
        if (!groupNameErr) {
            try {
                await axios.put(API_URL + "group/attributes", { groupId: props.groupId, name: groupName, icon: props.groupEmoji }).then(
                    response => {
                        alert("You have successfully edited group attributes.")
                        navigate(`/group/${props.groupId}`)
                    }
                );
            } catch (error) {
                console.error(error);
                alert("Something went wrong :(")
            }
        }
    }

    function addEmoji(e) {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        props.setGroupEmoji(emoji);
    }

    function onKeyDown(event) {
        if (event.key === "Enter" || event.key === "NumpadEnter") {
            EditGroupAttributesChangeRequest();
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
                        <EditGroupAttributesHeader>Edit group attributes</EditGroupAttributesHeader>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditGroupAttributesForm>

                        <EditGroupAttributesItem>
                            <Form.Group controlId="GroupName" size="lg">
                                <Form.Label>Group Name</Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Name"
                                    type="text"
                                    value={groupName}
                                    onChange={(e) => setGroupName(e.target.value)}
                                />
                                {props.validated && groupNameErr && <EditGroupAttributesErrorText>Please enter a name for the group.</EditGroupAttributesErrorText>}
                            </Form.Group>
                        </EditGroupAttributesItem>

                        <EditGroupAttributesItem>
                            <Form.Group controlId="GroupDescription" size="lg">
                                <Form.Label>Group description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Description"
                                    value={groupDescription}
                                    onChange={(e) => setGroupDescription(e.target.value)}
                                />
                            </Form.Group>
                        </EditGroupAttributesItem>
                    </EditGroupAttributesForm>

                    <EditGroupAttributesEmojiItem>
                        <EditGroupAttributesLabel>Group emoji</EditGroupAttributesLabel>
                        <EditGroupAttributesEmojiWrapper>
                            <EditGroupAttributesEmojiButtonEmoji onClick={() => props.setShowEmojis(!props.showEmojis)}>
                                {props.groupEmoji}
                            </EditGroupAttributesEmojiButtonEmoji>
                        </EditGroupAttributesEmojiWrapper>
                        {props.showEmojis && <Picker style={{ width: '100%' }} set='google' emojiSize={28.75} onSelect={addEmoji} />}
                    </EditGroupAttributesEmojiItem>

                </Modal.Body>

                <Modal.Footer>
                    <EditGroupAttributesButtonWrapper>
                        <EditGroupAttributesButton onClick={EditGroupAttributesChangeRequest}>
                            <EditGroupAttributesButtonText>Edit group attributes</EditGroupAttributesButtonText>
                        </EditGroupAttributesButton>
                    </EditGroupAttributesButtonWrapper>
                </Modal.Footer>

            </Modal>
        </div>
    );
}