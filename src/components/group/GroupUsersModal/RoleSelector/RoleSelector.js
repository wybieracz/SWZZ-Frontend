import React, { useState, useEffect } from "react";
import { RoleSelectorButton, RoleSelectorWrapper } from "./RoleSelectorStyled";
import RoleSelectorDrop from "./RoleSelectorDrop.js";

export default function RoleSelector({ user, handleChangeGroupUserRole }) {

    const [isDropActive, setIsDropActive] = useState(false);
    const [role, setRole] = useState(user.role);

    useEffect(() => {
        setRole(user.role)
    }, [user.role])

    return(
        <RoleSelectorWrapper>
            <RoleSelectorButton onClick={() => setIsDropActive(!isDropActive)}>
                {role==="Administrator" ? "Administrator" : null}
                {role==="PrivilegedUser" ? "Privileged User" : null}
                {role==="DefaultUser" ? "Default User" : null}
            </RoleSelectorButton>
            { isDropActive ?
                <RoleSelectorDrop user={user}
                    isDropActive={isDropActive}
                    setIsDropActive={setIsDropActive}
                    handleChangeGroupUserRole={handleChangeGroupUserRole}
                />
            : null }
        </RoleSelectorWrapper>
    )
}