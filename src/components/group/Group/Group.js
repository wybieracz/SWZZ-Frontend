import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import TaskList from "../../task/TaskList/TaskList";
import GroupMembers from "./GroupMembers";
import GroupSettingsManager from "../GroupSettings/GroupSettingsManager/GroupSettingsManager"
import { getGroupUsersRequest, changeGroupUserRole, getGroupIdFromLocation, deleteGroupUser } from "./GroupUtilities";
import { unassignedGroupUser } from "../../task/DefaultData/DefaultData";
import GroupUsersModal from "../GroupUsersModal/GroupUsersModal";
import { GroupBody, GroupTitle, GroupInfoButton, GroupEditButton, RightWrapper } from "./GroupStyled";
import GroupInfo from "./GroupInfo";

export default function Group({ user, isUserLoaded, groups, isGroupsLoaded, getUserGroups }) {
  const path = useLocation().pathname;
  const groupId = getGroupIdFromLocation(path);
  const [groupUsersModalShow, setGroupUsersModalShow] = useState(false);
  const [groupSettingsModalManagerShow, setGroupSettingsModalManagerShow] = useState(false);
  const [groupSettingsModalShow, setGroupSettingsModalShow] = useState(false);
  const [groupUsers, setGroupUsers] = useState([]);
  const [groupUser, setGroupUser] = useState(() => getGroupUserById(user.userId));
  const [groupInfoModalShow, setGroupInfoModalShow] = useState(false);

  const groupData = groups.filter(group => {
    return group.groupDTO.groupId == groupId
  })[0];

  function getGroupUserById(userId) {
    const result = groupUsers.filter(user => { return user.userDTO.userId == userId })[0];
    if (result) return { ...result, groupId: groupId };
    else return { ...unassignedGroupUser, groupId: 0};
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
            <GroupTitle>
              {groupData.groupDTO.icon + " " + groupData.groupDTO.name}
              <GroupInfoButton onClick={() => setGroupInfoModalShow(true) }>?</GroupInfoButton>
              <GroupInfo 
                show={groupInfoModalShow}
                onHide={() => setGroupInfoModalShow(false)}
                groupName={groupData.groupDTO.name}
                groupDescription={groupData.groupDTO.description}
              />
            </GroupTitle>
            <RightWrapper>
              {groupUser.role === "Administrator" ?
                <GroupEditButton onClick={() => { setGroupSettingsModalManagerShow(true); setGroupSettingsModalShow(true); }}>
                  Settings
                </GroupEditButton>
                :
                null
              }
              <GroupMembers user={user}
                isUserLoaded={isUserLoaded}
                groupUsers={groupUsers}
                setGroupUsersModalShow={setGroupUsersModalShow}
              />
            </RightWrapper>
          </GroupBody>
          <TaskList
            isPersonal={false}
            groupId={groupData.groupDTO.groupId}
            getGroupUserById={getGroupUserById}
            groupUsers={groupUsers}
            groupUser={groupUser}
          />
          {groupUser.role === "Administrator" ?
            <GroupSettingsManager
              show={groupSettingsModalManagerShow}
              setGroupSettingsModalManagerShow={(props) => setGroupSettingsModalManagerShow(props)}
              groupSettingsModalShow={groupSettingsModalShow}
              setGroupSettingsModalShow={(props) => setGroupSettingsModalShow(props)}
              groupDTO={groupData.groupDTO}
              groupUser={groupUser}
              getUserGroups={getUserGroups}
            />
            :
            null
          }
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