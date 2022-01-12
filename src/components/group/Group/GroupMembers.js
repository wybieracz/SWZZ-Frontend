import React, { useState, useEffect } from "react";
import MiniAvatar from "../../images/Avatar/MiniAvatar";
import { GroupMembersWrapper } from "./GroupStyled";

export default function GroupMembers({ groupUsers }) {
    var groupUsersCount = 0;
    if(groupUsers) groupUsersCount = groupUsers.length;
    console.log(groupUsers);
    if(groupUsersCount < 4) {
        console.log("I'm out");
        return (
            <GroupMembersWrapper>
                {groupUsers.map((user, index) => (
                  <MiniAvatar key={index} index={index} name={user.userDTO.name} surname={user.userDTO.surname} />
                ))}
            </GroupMembersWrapper>
        );
    } else {
        const firstThreeUsers = groupUsers.slice(0, 3);
        return (
            <GroupMembersWrapper>
                {firstThreeUsers.map((user, index) => (
                  <MiniAvatar key={index} index={index} name={user.userDTO.name} surname={user.userDTO.surname} />
                ))}
                
            </GroupMembersWrapper>
        );
    }
  
}
//TODO: +X button on group member