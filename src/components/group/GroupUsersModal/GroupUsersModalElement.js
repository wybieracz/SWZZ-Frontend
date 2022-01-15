import React, {useEffect} from "react";
import { GroupUser, GroupUserName, GroupUsersDot, GroupUserId } from "./GroupUsersModalStyled";
import colorGenerator from "../../../colors/ColorGenerator";
import RoleSelector from "./RoleSelector/RoleSelector";

export default function GroupUsersModalElement({ user, handleChangeGroupUserRole }) {

    return(
        <>
            <GroupUser>
                <GroupUserName><GroupUsersDot background={() => colorGenerator(user.userDTO)[0]} /> {user.userDTO.name} {user.userDTO.surname}</GroupUserName>
                <GroupUserId>{user.userDTO.userId}</GroupUserId>
                <RoleSelector user={user} handleChangeGroupUserRole={handleChangeGroupUserRole} />
            </GroupUser>
        </>
    )
}