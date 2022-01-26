import React, { useEffect, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { LoadingIconWrapper } from "../../images/Icons/IconsStyled.js";
import LoadingIcon from "../../../bitmaps/Load_White.png";
import {
    GroupCreatorForm,
    GroupCreatorHeader,
    GroupCreatorButtonWrapper,
    GroupCreatorButton,
    GroupCreatorItem,
    GroupCreatorEmojiItem,
    GroupCreatorLabel,
    GroupCreatorEmojiWrapper,
    GroupCreatorEmojiButtonEmoji,
    GroupCreatorButtonIconWrapper,
    GroupCreatorErrorText
} from "./GroupCreatorModalStyled.js";
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

export default function GroupCreatorModal(props) {

    const [groupTitleErr, setGroupTitleErr] = useState(true);
    const [groupEmojiErr, setGroupEmojiErr] = useState(true);
    const [valid, setValid] = useState(false);
    const [isRequestSent, setIsRequestSent] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        props.groupTitle.length > 0 ? setGroupTitleErr(false) : setGroupTitleErr(true);
    }, [props.groupTitle]);

    useEffect(() => {
        props.groupEmoji != null ? setGroupEmojiErr(false) : setGroupEmojiErr(true);
    }, [props.groupEmoji]);

    useEffect(() => {
        (groupTitleErr || groupEmojiErr) ? setValid(false) : setValid(true);
    }, [groupTitleErr, groupEmojiErr]);

    async function handleGroupCreate() {
        props.setValidated(true)
        if (valid) {
            setIsRequestSent(true)
            try {
                await axios.post(API_URL + "group", { name: props.groupTitle, icon: props.groupEmoji, description: props.groupDescription }).then(
                    response => {
                        props.getUserGroups(response.data)
                        navigate(`/group/${response.data}`)
                        props.onHide()
                        setValid(false)
                        setIsRequestSent(false)
                    }
                );
            } catch (error) {
                console.error(error)
                setIsRequestSent(false)
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
                                    value={props.groupTitle}
                                    onChange={(e) => props.setGroupTitle(e.target.value)}
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
                                    value={props.groupDescription}
                                    onChange={(e) => props.setGroupDescription(e.target.value)}
                                />
                            </Form.Group>
                        </GroupCreatorItem>
                    </GroupCreatorForm>

                    <GroupCreatorEmojiItem>
                        <GroupCreatorLabel>Group emoji</GroupCreatorLabel>
                        <GroupCreatorEmojiWrapper>
                            {groupEmojiErr ? null :
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
                        <GroupCreatorButton onClick={handleGroupCreate}> { isRequestSent
                            ? <GroupCreatorButtonIconWrapper>
                                <LoadingIconWrapper size="20px">
                                    <img src={LoadingIcon} alt="LoadingIcon" width="20px" heigth="20px" />
                                </LoadingIconWrapper>
                            </GroupCreatorButtonIconWrapper>
                            : "Create group"
                            }
                        </GroupCreatorButton>
                    </GroupCreatorButtonWrapper>
                </Modal.Footer>

            </Modal>
        </div>
    );
}