import React, {useEffect} from "react";
import { GroupUser, GroupUserName, GroupUsersDot, GroupUserId, Buttons } from "./GroupUsersModalStyled";
import colorGenerator from "../../../colors/ColorGenerator";
import RoleSelector from "./RoleSelector/RoleSelector";
import { ActionButton } from "../../task/TaskList/TaskListButtonsStyled";
import { DeleteIcon } from "../../../vectors/Icons";
import { Raspberry, GreyNight } from "../../../colors/Colors";

export default function GroupUsersModalElement({ user, isUserLoaded, member, handleChangeGroupUserRole, deleteGroupUser }) {

    const isEditDisabled = checkPermissionToRoleEdit();

    function checkPermissionToRoleEdit() {
        if (isUserLoaded && user.userDTO.userId===member.userDTO.userId) return true
        else if (isUserLoaded && user.role!=="Administrator") return true
        else return false
    }

    function handleMemberDeletion() {
        deleteGroupUser(member.userDTO.userId, member.role)
    }

    return(
        <>
            <GroupUser>
                <GroupUserName><GroupUsersDot background={() => colorGenerator(member.userDTO)[0]} /> {member.userDTO.name} {member.userDTO.surname}</GroupUserName>
                <GroupUserId>{member.userDTO.userId}</GroupUserId>
                <Buttons>
                    <RoleSelector disabled={isEditDisabled} user={member} handleChangeGroupUserRole={handleChangeGroupUserRole} />
                    {!(isUserLoaded && user.role!=="Administrator") ?
                        <ActionButton onClick={handleMemberDeletion}
                        disabled={isEditDisabled}
                        background={GreyNight}
                        hoverBackground={Raspberry}
                        disabledBackground={GreyNight}>
                            <DeleteIcon />
                        </ActionButton>
                    : null}
                </Buttons>
            </GroupUser>
        </>
    )
}