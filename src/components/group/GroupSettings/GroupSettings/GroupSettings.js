import React, { useState } from "react";
import { useLocation } from "react-router";
import DeleteGroupModal from "../DeleteGroupModal/DeleteGroupModal";
import PeekGroupCodeModal from "../PeekGroupCodeModal/PeekGroupCodeModal";
import EditGroupAttributesModal from "../EditGroupAttributesModal/EditGroupAttributesModal";
import {
    GroupSettingsBody,
    GroupSettingsHeader,
    GroupSettingsText,
    GroupSettingsButtonWrapper,
    GroupSettingsButton,
    GroupSettingsDeleteButton
} from "./GroupSettingsStyled";

export default function GroupSettings({ groups, isGroupsLoaded }) {

    const path = useLocation().pathname;
    const groupId = path.match('[0-9]+')[0]
    console.log(groupId)
    const groupData = groups.filter(group => {
        return group.groupDTO.groupId == groupId
    })[0];
    const [showEmojis, setShowEmojis] = useState(false);
    const [groupEmoji, setGroupEmoji] = useState(groupData.groupDTO.icon);
    const [validated, setValidated] = useState(false);
    const [copied, setCopied] = useState(false);
    const [peekGroupCodeModalShow, setPeekGroupCodeModalShow] = useState(false);
    const [editGroupAttributesModalShow, setEditGroupAttributesModalShow] = useState(false);
    const [deleteGroupModalShow, setDeleteGroupModalShow] = useState(false);

    return (
        <>
            {(isGroupsLoaded && groupData) ?
                <>
                    <GroupSettingsBody>
                        <GroupSettingsHeader>Group Settings</GroupSettingsHeader>
                        <GroupSettingsText>{groupData.groupDTO.name}</GroupSettingsText>
                        <GroupSettingsButtonWrapper>
                            <GroupSettingsButton onClick={() => setPeekGroupCodeModalShow(true)}>
                                Peek group code
                            </GroupSettingsButton>
                            <GroupSettingsButton onClick={() => setEditGroupAttributesModalShow(true)}>
                                Edit group attributes
                            </GroupSettingsButton>
                            <GroupSettingsDeleteButton onClick={() => setDeleteGroupModalShow(true)}>
                                Delete group
                            </GroupSettingsDeleteButton>
                        </GroupSettingsButtonWrapper>
                    </GroupSettingsBody>
                    <PeekGroupCodeModal
                        show={peekGroupCodeModalShow}
                        onHide={() => { setCopied(false); setPeekGroupCodeModalShow(false); }}
                        groupId={groupId}
                        copied={copied}
                        setCopied={(props) => setCopied(props)}
                    />
                    <DeleteGroupModal
                        show={deleteGroupModalShow}
                        onHide={() => setDeleteGroupModalShow(false)}
                        groupId={groupId}
                    />
                    <EditGroupAttributesModal
                        show={editGroupAttributesModalShow}
                        onHide={() => { setValidated(false); setEditGroupAttributesModalShow(false); }}
                        groupId={groupId}
                        validated={validated}
                        setValidated={(props) => setValidated(props)}
                        groupEmoji={groupEmoji}
                        setGroupEmoji={(props) => setGroupEmoji(props)}
                        showEmojis={showEmojis}
                        setShowEmojis={(props) => setShowEmojis(props)}
                    />
                </>
                : null
            }
        </>
    );
}