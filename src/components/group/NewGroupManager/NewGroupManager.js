import React, { useState } from "react";
import NewGroupModal from "../NewGroupModal/NewGroupModal";
import GroupCreatorModal from "../GroupCreatorModal/GroupCreatorModal";
import JoinGroupModal from "../JoinGroupModal/JoinGroupModal";

export default function NewGroupManager(props) {

    const [groupTitle, setGroupTitle] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [groupEmoji, setGroupEmoji] = useState("✅");
    const [showEmojis, setShowEmojis] = useState(false);
    const [validated, setValidated] = useState(false);
    const [groupCode, setGroupCode] = useState("");

    const [createGroupModalShow, setCreateGroupModalShow] = useState(false);
    const [joinGroupModalShow, setJoinGroupModalShow] = useState(false);

    function handleOnHide() {
        setValidated(false)
        setGroupTitle("")
        setGroupDescription("")
        setGroupEmoji("✅")
        setShowEmojis(false)
        setGroupCode("")
        props.setGroupModalShow(false)
        props.setNewGroupModalShow(false)
        setCreateGroupModalShow(false)
        setJoinGroupModalShow(false)
    }

    return (
        <>
            <NewGroupModal
                show={props.newGroupShow}
                onHide={handleOnHide}
                handleCreateGroup={() => { setCreateGroupModalShow(true); props.setNewGroupModalShow(false); }}
                handleJoinGroup={() => { setJoinGroupModalShow(true); props.setNewGroupModalShow(false); }}
            />
            <GroupCreatorModal
                show={createGroupModalShow}
                setShow={setCreateGroupModalShow}
                onHide={handleOnHide}
                validated={validated}
                setValidated={setValidated}
                groupTitle={groupTitle}
                setGroupTitle={setGroupTitle}
                groupDescription={groupDescription}
                setGroupDescription={setGroupDescription}
                groupEmoji={groupEmoji}
                setGroupEmoji={setGroupEmoji}
                showEmojis={showEmojis}
                setShowEmojis={setShowEmojis}
                getUserGroups={props.getUserGroups}
            />
            <JoinGroupModal
                show={joinGroupModalShow}
                onHide={handleOnHide}
                validated={validated}
                setValidated={setValidated}
                groupCode={groupCode}
                setGroupCode={setGroupCode}
                getUserGroups={props.getUserGroups}
            />
        </>
    );
}