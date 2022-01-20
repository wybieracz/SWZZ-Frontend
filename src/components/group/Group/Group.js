import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import TaskList from "../../task/TaskList/TaskList";
import GroupMembers from "./GroupMembers";
import { getGroupUsersRequest, changeGroupUserRole, getGroupIdFromLocation, deleteGroupUser } from "./GroupUtilities";
import { unassignedGroupUser } from "../../task/DefaultData/DefaultData";
import PeekGroupCodeModal from "../PeekGroupCodeModal/PeekGroupCodeModal";
import GroupUsersModal from "../GroupUsersModal/GroupUsersModal";
import { GroupBody, GroupTitle, GroupEditButton, RightWrapper } from "./GroupStyled";

export default function Group({ user, isUserLoaded, groups, isGroupsLoaded }) {
  const path = useLocation().pathname;
  const groupId = getGroupIdFromLocation(path);
  const [copied, setCopied] = useState(false);
  const [peekGroupCodeModalShow, setPeekGroupCodeModalShow] = useState(false);
  const [groupUsersModalShow, setGroupUsersModalShow] = useState(false);
  const [groupUsers, setGroupUsers] = useState([]);
  const [groupUser, setGroupUser] = useState(() => getGroupUserById(user.userId));
  const groupData = groups.filter(group => {
    return group.groupDTO.groupId == groupId
  })[0];
  
  function getGroupUserById(userId) {
    const result = groupUsers.filter(user => { return user.userDTO.userId == userId })[0];
    if (result) return result;
    else return unassignedGroupUser;
  }

  function handleChangeGroupUserRole(userId, role) {
    changeGroupUserRole(userId, groupId, role, groupUsers, setGroupUsers)
  }

  function handleDeleteGroupUser(userId, role) {
    deleteGroupUser(userId, groupId, role, groupUsers, setGroupUsers)
  }

  useEffect(() => {
    getGroupUsersRequest(groupId, setGroupUsers);
  }, [groupId]);

  useEffect(() => {
    setGroupUser(getGroupUserById(user.userId));
  }, [user, groupUsers]);

  return (
    <>
    {(isGroupsLoaded && groupData) ? 
      <>
      <GroupBody>
        <GroupTitle>{groupData.groupDTO.icon + " " + groupData.groupDTO.name}</GroupTitle>
        <RightWrapper>
          <GroupEditButton onClick={() => setPeekGroupCodeModalShow(true)}>Edit</GroupEditButton>
          <GroupMembers user={user}
            isUserLoaded={isUserLoaded}
            groupUsers={groupUsers}
            setGroupUsersModalShow={setGroupUsersModalShow}
          />
        </RightWrapper>
      </GroupBody>
      <TaskList groupId={groupData.groupDTO.groupId} getGroupUserById={getGroupUserById} groupUsers={groupUsers}/>
      <PeekGroupCodeModal
        show={peekGroupCodeModalShow}
        onHide={() => { setCopied(false); setPeekGroupCodeModalShow(false); }}
        groupId={groupId}
        copied={copied}
        setCopied={(props) => setCopied(props)}
      />
      <GroupUsersModal
        show={groupUsersModalShow}
        onHide={() => setGroupUsersModalShow(false)}
        groupUsers={groupUsers}
        handleChangeGroupUserRole={handleChangeGroupUserRole}
        user={groupUser}
        isUserLoaded={isUserLoaded}
        deleteGroupUser={handleDeleteGroupUser}
      />
      </>
    : null}
    </>
  );
}