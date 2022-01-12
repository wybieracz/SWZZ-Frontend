import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import TaskList from "../../task/TaskList/TaskList";
import GroupMembers from "./GroupMembers";
import PeekGroupCodeModal from "../PeekGroupCodeModal/PeekGroupCodeModal";
import { GroupBody, GroupTitle, GroupEditButton, RightWrapper } from "./GroupStyled";
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

export default function Group({ groups, isGroupsLoaded }) {

  const [copied, setCopied] = useState(false);
  const [peekGroupCodeModalShow, setPeekGroupCodeModalShow] = useState(false);
  const groupId = useLocation().pathname.slice(-1);
  const groupData = groups.filter(group => {
    return group.groupDTO.groupId == groupId
  })[0];
  const [groupUsers, setGroupUsers] = useState([]);

  async function getGroupUsersRequest() {
    try {
      await axios.get(API_URL + "group/users?groupId=" + groupId).then(
        response => {
          setGroupUsers(response.data);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getGroupUsersRequest();
  }, [groupId]);

  return (
    <>
      {(isGroupsLoaded && groupData) ?
        <>
          <GroupBody>
            <GroupTitle>{groupData.groupDTO.icon + " " + groupData.groupDTO.name}</GroupTitle>
            <RightWrapper>
              <GroupEditButton onClick={() => setPeekGroupCodeModalShow(true)}>Edit</GroupEditButton>
              <GroupMembers groupUsers={groupUsers} />
            </RightWrapper>
          </GroupBody>
          <TaskList groupId={groupData.groupDTO.groupId} />
          <PeekGroupCodeModal
            show={peekGroupCodeModalShow}
            onHide={() => { setCopied(false); setPeekGroupCodeModalShow(false); }}
            groupId={groupId}
            copied={copied}
            setCopied={(props) => setCopied(props)}
          />
        </>
        : null}
    </>
  );
}