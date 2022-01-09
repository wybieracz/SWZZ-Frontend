import React from "react";
import NewGroupModal from "../NewGroupModal/NewGroupModal";
import GroupCreatorModal from "../GroupCreatorModal/GroupCreatorModal";
import JoinGroupModal from "../JoinGroupModal/JoinGroupModal";

export default function NewGroupManager(props) {
    return (
        <>
            <NewGroupModal
                show={props.newGroupShow}
                onHide={props.onHide}
                handleCreateGroup={props.handleCreateGroup}
                handleJoinGroup={props.handleJoinGroup}
                validated={props.validated}
                setValidated={props.setValidated}
            />
            <GroupCreatorModal
                show={props.createGroupShow}
                onHide={props.onHide}
                validated={props.validated}
                setValidated={props.setValidated}
                groupEmoji={props.groupEmoji}
                setGroupEmoji={props.setGroupEmoji}
                showEmojis={props.showEmojis}
                setShowEmojis={props.setShowEmojis}
            />
            <JoinGroupModal
                show={props.joinGroupShow}
                onHide={props.onHide}
                validated={props.validated}
                setValidated={props.setValidated}
            />
        </>
    );
}