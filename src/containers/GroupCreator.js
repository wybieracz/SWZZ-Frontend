import React, { useEffect, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Picker from 'emoji-picker-react';
import { GroupCreatorForm, GroupCreatorHeader, GroupCreatorButtonWrapper, GroupCreatorButton, GroupCreatorButtonText, GroupCreatorItem, GroupCreatorEmojiText, GroupCreatorEmojiError, GroupCreatorErrorText } from "../styled/GroupCreatorStyled.js";

export default function GroupCreator(props) {

    const [groupTitle, setGroupTitle] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [groupEmoji, setGroupEmoji] = useState(null);

    const [groupTitleErr, setGroupTitleErr] = useState(true);
    const [groupDescriptionErr, setGroupDescriptionErr] = useState(true);
    const [groupEmojiErr, setGroupEmojiErr] = useState(true);

    const [validated, setValidated] = useState(false);
    const [valid, setValid] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        groupTitle.length > 0 ? setGroupTitleErr(false) : setGroupTitleErr(true);
    }, [groupTitle]);

    useEffect(() => {
        groupDescription.length > 0 ? setGroupDescriptionErr(false) : setGroupDescriptionErr(true);
    }, [groupDescription]);

    useEffect(() => {
        groupEmoji != null ? setGroupEmojiErr(false) : setGroupEmojiErr(true);
    }, [groupEmoji]);

    useEffect(() => {
        ( groupTitleErr || groupDescriptionErr || groupEmojiErr ) ? setValid(false) : setValid(true);
    }, [groupTitleErr, groupDescriptionErr, groupEmojiErr]);

    async function handleGroupCreate() {
        setValidated(true);
        if (valid) {
            navigate("/group/home");
        }
    }

    const onEmojiClick = (event, emojiObject) => {
        setGroupEmoji(emojiObject);
    };

    return (
        <Modal
            {...props}
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
                            {validated && groupTitleErr && <GroupCreatorErrorText>Please provide a valid password.</GroupCreatorErrorText>}
                        </Form.Group>
                    </GroupCreatorItem>

                    <GroupCreatorItem>
                        <Form.Group controlId="GroupDescription" size="lg">
                            <Form.Label>Group description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                required
                                placeholder="Description"
                                value={groupDescription}
                                onChange={(e) => setGroupDescription(e.target.value)}
                            />
                            {validated && groupDescriptionErr && <GroupCreatorErrorText>Please provide a valid password.</GroupCreatorErrorText>}
                        </Form.Group>
                    </GroupCreatorItem>

                    {groupEmojiErr ? (<GroupCreatorEmojiError>No group emoji chosen.</GroupCreatorEmojiError>) : (<GroupCreatorEmojiText>Group emoji: {groupEmoji.emoji}</GroupCreatorEmojiText>)}
                    <div>
                        <Picker onEmojiClick={onEmojiClick} />
                    </div>
                </GroupCreatorForm>
            </Modal.Body>

            <Modal.Footer>
                <GroupCreatorButtonWrapper>
                    <GroupCreatorButton onClick={handleGroupCreate}>
                        <GroupCreatorButtonText>Create group</GroupCreatorButtonText>
                    </GroupCreatorButton>
                </GroupCreatorButtonWrapper>
            </Modal.Footer>

        </Modal>
    );
}