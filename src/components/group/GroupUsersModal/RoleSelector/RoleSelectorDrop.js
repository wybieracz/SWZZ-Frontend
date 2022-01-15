import React from "react";
import { RoleSelectorDropWrapper, RoleSelectorDropElement, RoleDot } from "./RoleSelectorStyled";
import { White, GreyDark, GreyNight } from "../../../../colors/Colors";

export default function TaskCommissioneeDrop({ user, isDropActive, setIsDropActive, handleChangeGroupUserRole }) {

    const roles = [["Administrator", "Administrator"], ["PrivilegedUser", "Privileged User"], ["DefaultUser", "Default User"]];
    const roleColors = [GreyNight, GreyDark, White];

    function handleClick(role) {
        handleChangeGroupUserRole(user.userDTO.userId, role);
        setIsDropActive(!isDropActive)
    }

    return(
        <RoleSelectorDropWrapper>
            {roles.map((role, index) => (
                <RoleSelectorDropElement onClick={() => handleClick(role[0])} key={index} index={index}>
                    <RoleDot background={roleColors[index]} />
                    {role[1]}
                </RoleSelectorDropElement>
            ))}
        </RoleSelectorDropWrapper>
    )
}