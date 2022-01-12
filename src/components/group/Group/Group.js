import React, { useState, useEffect } from "react";
import TaskList from "../../task/TaskList/TaskList";
import { GroupBody, GroupTitle, GroupEditButton, RightWrapper } from "./GroupStyled";
import GroupMembers from "./GroupMembers";
import { useLocation } from 'react-router-dom'
import { getGroupUsersRequest, getGroupIdFromLocation } from "./GroupUtilities";
import { unassignedGroupUser } from "../../task/DefaultData/DefaultData";

export default function Group({ groups, isGroupsLoaded }) {
  const path = useLocation().pathname;
  const groupId = getGroupIdFromLocation(path);
  const groupData = groups.filter(group => {
    return group.groupDTO.groupId == groupId
  })[0];
  const [groupUsers, setGroupUsers] = useState([]);

  function getGroupUserById(userId) {
    const result = groupUsers.filter(user => { return user.userDTO.userId == userId })[0];
    if (result) return result;
    else return unassignedGroupUser;
  }

  useEffect(() => {
    getGroupUsersRequest(groupId, setGroupUsers);
  }, [groupId]);

  return (
    <>
    {(isGroupsLoaded && groupData) ? 
      <>
      <GroupBody>
      <GroupTitle>{groupData.groupDTO.icon + " " + groupData.groupDTO.name}</GroupTitle>
      <RightWrapper>
        <GroupEditButton>Edit</GroupEditButton>
        <GroupMembers groupUsers={groupUsers} />
      </RightWrapper>
      </GroupBody>
      <TaskList groupId={groupData.groupDTO.groupId} getGroupUserById={getGroupUserById} />
      </>
    : null}
    </>
  );
}