import React, { useState, useEffect } from "react";
import MiniAvatar from "../../images/Avatar/MiniAvatar";
import { GroupMembersButton, GroupMembersWrapper } from "./GroupStyled";

export default function GroupMembers({ groupUsers }) {
    var groupUsersCount = 0;
    if(groupUsers) groupUsersCount = groupUsers.length;
    //console.log(groupUsers);
    if(groupUsersCount < 4) {
        return (
            <GroupMembersWrapper>
                <GroupMembersButton>+0</GroupMembersButton>
                {groupUsers.map((user, index) => (
                  <MiniAvatar key={index} index={index} user={user.userDTO} />
                ))}                
            </GroupMembersWrapper>
        );
    } else {
        const firstThreeUsers = groupUsers.slice(0, 4);
        return (
            <GroupMembersWrapper>
                <GroupMembersButton>+{groupUsersCount - 4}</GroupMembersButton>
                {firstThreeUsers.map((user, index) => (
                  <MiniAvatar key={index} index={index} user={user.userDTO} />
                ))}                
            </GroupMembersWrapper>
        );
    }
  
}
//TODO: +X button on group member