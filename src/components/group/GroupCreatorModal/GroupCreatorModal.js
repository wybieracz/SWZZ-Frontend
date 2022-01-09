import React, { useEffect, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { EmojiIcon } from "../../../vectors/Emoji.js";
import {
    GroupCreatorForm,
    GroupCreatorHeader,
    GroupCreatorButtonWrapper,
    GroupCreatorButton,
    GroupCreatorButtonText,
    GroupCreatorItem,
    GroupCreatorEmojiItem,
    GroupCreatorLabel,
    GroupCreatorEmojiWrapper,
    GroupCreatorEmojiButtonIcon,
    GroupCreatorEmojiButtonEmoji,
    GroupCreatorErrorText
} from "./GroupCreatorModalStyled.js";

export default function GroupCreatorModal(props) {

    const [groupTitle, setGroupTitle] = useState("");
    const [groupDescription, setGroupDescription] = useState("");

    const [groupTitleErr, setGroupTitleErr] = useState(true);
    const [groupEmojiErr, setGroupEmojiErr] = useState(true);

    const [valid, setValid] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        groupTitle.length > 0 ? setGroupTitleErr(false) : setGroupTitleErr(true);
    }, [groupTitle]);

    useEffect(() => {
        props.groupEmoji != null ? setGroupEmojiErr(false) : setGroupEmojiErr(true);
    }, [props.groupEmoji]);

    useEffect(() => {
        (groupTitleErr || groupEmojiErr) ? setValid(false) : setValid(true);
    }, [groupTitleErr, groupEmojiErr]);

    async function handleGroupCreate() {
        props.setValidated(true);
        if (valid) {
            alert("You have created a new group.")
            navigate("/group/home");
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
            handleGroupCreate();
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
                        <GroupCreatorHeader>Group creator</GroupCreatorHeader>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <GroupCreatorForm>

                        <GroupCreatorItem>
                            <Form.Group controlId="GroupTitle" size="lg">
                                <Form.Label>Group title</Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Title"
                                    type="text"
                                    value={groupTitle}
                                    onChange={(e) => setGroupTitle(e.target.value)}
                                />
                                {props.validated && groupTitleErr && <GroupCreatorErrorText>Please enter a title for the group.</GroupCreatorErrorText>}
                            </Form.Group>
                        </GroupCreatorItem>

                        <GroupCreatorItem>
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
                        </GroupCreatorItem>
                    </GroupCreatorForm>

                    <GroupCreatorEmojiItem>
                        <GroupCreatorLabel>Group emoji</GroupCreatorLabel>
                        <GroupCreatorEmojiWrapper>
                            {groupEmojiErr ?
                                <GroupCreatorEmojiButtonIcon onClick={() => props.setShowEmojis(!props.showEmojis)}>
                                    <EmojiIcon />
                                </GroupCreatorEmojiButtonIcon>
                                :
                                <GroupCreatorEmojiButtonEmoji onClick={() => props.setShowEmojis(!props.showEmojis)}>
                                    {props.groupEmoji}
                                </GroupCreatorEmojiButtonEmoji>
                            }
                        </GroupCreatorEmojiWrapper>
                        {props.validated && groupEmojiErr && <GroupCreatorErrorText>Please select group emoji.</GroupCreatorErrorText>}
                        {props.showEmojis && <Picker style={{ width: '100%' }} set='google' emojiSize={28.75} onSelect={addEmoji} />}
                    </GroupCreatorEmojiItem>

                </Modal.Body>

                <Modal.Footer>
                    <GroupCreatorButtonWrapper>
                        <GroupCreatorButton onClick={handleGroupCreate}>
                            <GroupCreatorButtonText>Create group</GroupCreatorButtonText>
                        </GroupCreatorButton>
                    </GroupCreatorButtonWrapper>
                </Modal.Footer>

            </Modal>
        </div>
    );
}