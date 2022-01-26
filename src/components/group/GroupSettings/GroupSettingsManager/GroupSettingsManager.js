import React, { useState, useEffect } from "react";
import GroupSettings from "../GroupSettings/GroupSettings";
import DeleteGroupModal from "../DeleteGroupModal/DeleteGroupModal";
import PeekGroupCodeModal from "../PeekGroupCodeModal/PeekGroupCodeModal";
import EditGroupAttributesModal from "../EditGroupAttributesModal/EditGroupAttributesModal";

export default function NewGroupManager(props) {

    const [showEmojis, setShowEmojis] = useState(false);
    const [groupEmoji, setGroupEmoji] = useState(props.groupDTO.icon);
    const [groupName, setGroupName] = useState(props.groupDTO.name);
    const [groupDescription, setGroupDescription] = useState(props.groupDTO.description);
    const [validated, setValidated] = useState(false);
    const [copied, setCopied] = useState(false);
    const [peekGroupCodeModalShow, setPeekGroupCodeModalShow] = useState(false);
    const [editGroupAttributesModalShow, setEditGroupAttributesModalShow] = useState(false);
    const [deleteGroupModalShow, setDeleteGroupModalShow] = useState(false);

    useEffect(() => {
        if(props.groupDTO) {
            setGroupEmoji(props.groupDTO.icon)
            setGroupName(props.groupDTO.name)
            setGroupDescription(props.groupDTO.description)
        }
    }, [props.groupDTO.groupId]);

    function handleOnHide() {
        setValidated(false)
        setShowEmojis(false)
        setGroupEmoji(props.groupDTO.icon)
        setGroupName(props.groupDTO.name)
        setGroupDescription(props.groupDTO.description)
        setCopied(false)
        props.setGroupSettingsModalShow(false)
        setPeekGroupCodeModalShow(false)
        setEditGroupAttributesModalShow(false)
        setDeleteGroupModalShow(false)
        props.setGroupSettingsModalManagerShow(false)
    }

    return (
        <>
            <GroupSettings
                show={props.groupSettingsModalShow}
                onHide={handleOnHide}
                handlePeekGroupCode={() => { setPeekGroupCodeModalShow(true); props.setGroupSettingsModalShow(false); }}
                handleEditGroupAttributes={() => { setEditGroupAttributesModalShow(true); props.setGroupSettingsModalShow(false); }}
                handleDeleteGroup={() => { setDeleteGroupModalShow(true); props.setGroupSettingsModalShow(false); }}
                groupName={props.groupDTO.name}
            />
            <PeekGroupCodeModal
                show={peekGroupCodeModalShow}
                onHide={handleOnHide}
                groupId={props.groupDTO.groupId}
                copied={copied}
                setCopied={setCopied}
                groupUser={props.groupUser}
            />
            <EditGroupAttributesModal
                show={editGroupAttributesModalShow}
                onHide={handleOnHide}
                groupId={props.groupDTO.groupId}
                validated={validated}
                setValidated={setValidated}
                groupEmoji={groupEmoji}
                setGroupEmoji={setGroupEmoji}
                groupName={groupName}
                setGroupName={setGroupName}
                groupDescription={groupDescription}
                setGroupDescription={setGroupDescription}
                showEmojis={showEmojis}
                setShowEmojis={setShowEmojis}
                getUserGroups={props.getUserGroups}
            />
            <DeleteGroupModal
                show={deleteGroupModalShow}
                onHide={handleOnHide}
                groupId={props.groupDTO.groupId}
                getUserGroups={props.getUserGroups}
            />
        </>
    );
}