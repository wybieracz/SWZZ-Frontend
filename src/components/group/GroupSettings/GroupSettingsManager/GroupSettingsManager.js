import React from "react";
import GroupSettings from "../GroupSettings/GroupSettings";
import DeleteGroupModal from "../DeleteGroupModal/DeleteGroupModal";
import PeekGroupCodeModal from "../PeekGroupCodeModal/PeekGroupCodeModal";
import EditGroupAttributesModal from "../EditGroupAttributesModal/EditGroupAttributesModal";

export default function NewGroupManager(props) {

    return (
        <>
            <GroupSettings
                show={props.groupSettingsModalShow}
                onHide={props.onHide}
                handlePeekGroupCode={props.handlePeekGroupCode}
                handleEditGroupAttributes={props.handleEditGroupAttributes}
                handleDeleteGroup={props.handleDeleteGroup}
                groupName={props.groupName}
            />
            <PeekGroupCodeModal
                show={props.peekGroupCodeModalShow}
                onHide={props.onHide}
                groupId={props.groupId}
                copied={props.copied}
                setCopied={props.setCopied}
            />
            <EditGroupAttributesModal
                show={props.editGroupAttributesModalShow}
                onHide={props.onHide}
                groupId={props.groupId}
                validated={props.validated}
                setValidated={props.setValidated}
                groupEmoji={props.groupEmoji}
                setGroupEmoji={props.setGroupEmoji}
                groupName={props.groupName}
                showEmojis={props.showEmojis}
                setShowEmojis={props.setShowEmojis}
            />
            <DeleteGroupModal
                show={props.deleteGroupModalShow}
                onHide={props.onHide}
                groupId={props.groupId}
            />
        </>
    );
}