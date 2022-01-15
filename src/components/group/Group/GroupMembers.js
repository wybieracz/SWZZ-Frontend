import React from "react";
import MiniAvatar from "../../images/Avatar/MiniAvatar";
import { GroupMembersButton, GroupMembersWrapper } from "./GroupStyled";

export default function GroupMembers({ groupUsers, setGroupUsersModalShow }) {
    var groupUsersCount = 0;
    if(groupUsers) groupUsersCount = groupUsers.length;

    if(groupUsersCount < 4) {
        return (
            <GroupMembersWrapper>
                <GroupMembersButton onClick={() => setGroupUsersModalShow(true)}>+0</GroupMembersButton>
                {groupUsers.map((user, index) => (
                  <MiniAvatar key={index} index={index} user={user.userDTO} />
                ))}                
            </GroupMembersWrapper>
        );
    } else {
        const firstThreeUsers = groupUsers.slice(0, 4);
        return (
            <GroupMembersWrapper>
                <GroupMembersButton onClick={() => setGroupUsersModalShow(true)}>+{groupUsersCount - 4}</GroupMembersButton>
                {firstThreeUsers.map((user, index) => (
                  <MiniAvatar key={index} index={index} user={user.userDTO} />
                ))}                
            </GroupMembersWrapper>
        );
    }
  
}