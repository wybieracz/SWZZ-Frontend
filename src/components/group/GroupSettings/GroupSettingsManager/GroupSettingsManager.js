import React, { useState } from "react";
import GroupSettings from "../GroupSettings/GroupSettings";
import DeleteGroupModal from "../DeleteGroupModal/DeleteGroupModal";
import PeekGroupCodeModal from "../PeekGroupCodeModal/PeekGroupCodeModal";
import EditGroupAttributesModal from "../EditGroupAttributesModal/EditGroupAttributesModal";

export default function NewGroupManager(props) {

    const [showEmojis, setShowEmojis] = useState(false);
    const [groupEmoji, setGroupEmoji] = useState("✅");
    const [validated, setValidated] = useState(false);
    const [copied, setCopied] = useState(false);
    const [peekGroupCodeModalShow, setPeekGroupCodeModalShow] = useState(false);
    const [editGroupAttributesModalShow, setEditGroupAttributesModalShow] = useState(false);
    const [deleteGroupModalShow, setDeleteGroupModalShow] = useState(false);

    function handleOnHide() {
        setValidated(false);
        setShowEmojis(false);
        setGroupEmoji("✅");
        setCopied(false);
        props.setGroupSettingsModalShow(false);
        setPeekGroupCodeModalShow(false);
        setEditGroupAttributesModalShow(false);
        setDeleteGroupModalShow(false);
        props.setGroupSettingsModalManagerShow(false);
    }

    return (
        <>
            <GroupSettings
                show={props.groupSettingsModalShow}
                onHide={handleOnHide}
                handlePeekGroupCode={() => { setPeekGroupCodeModalShow(true); props.setGroupSettingsModalShow(false); }}
                handleEditGroupAttributes={() => { setEditGroupAttributesModalShow(true); props.setGroupSettingsModalShow(false); }}
                handleDeleteGroup={() => { setDeleteGroupModalShow(true); props.setGroupSettingsModalShow(false); }}
                groupName={props.groupName}
            />
            <PeekGroupCodeModal
                show={peekGroupCodeModalShow}
                onHide={handleOnHide}
                groupId={props.groupId}
                copied={copied}
                setCopied={setCopied}
            />
            <EditGroupAttributesModal
                show={editGroupAttributesModalShow}
                onHide={handleOnHide}
                groupId={props.groupId}
                validated={validated}
                setValidated={setValidated}
                groupEmoji={groupEmoji}
                setGroupEmoji={setGroupEmoji}
                groupName={props.groupName}
                showEmojis={showEmojis}
                setShowEmojis={setShowEmojis}
            />
            <DeleteGroupModal
                show={deleteGroupModalShow}
                onHide={handleOnHide}
                groupId={props.groupId}
            />
        </>
    );
}