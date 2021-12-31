import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DeleteAccount from "./DeleteAccount";
import ChangePassword from "./ChangePassword";
import { SettingsBody, SettingsHeader, SettingsText, SettingsButtonWrapper, SettingsButton, SettingsButtonText, SettingsDeleteButtonText } from "../styled/SettingsStyled.js";

export default function Settings() {

    const [changePasswordModalShow, setChangePasswordModalShow] = useState(false);
    const [deleteAccountModalShow, setDeleteAccountModalShow] = useState(false);

    return (
        <div>
            <Sidebar />
            <SettingsBody>
                <SettingsHeader>Settings</SettingsHeader>
                <SettingsText>Name: Jan</SettingsText>
                <SettingsText>Surname: Kowalski</SettingsText>
                <SettingsText>Email: jan.kowalski@mail.com</SettingsText>
                <SettingsButtonWrapper>
                    <SettingsButton onClick={() => setChangePasswordModalShow(true)}>
                        <SettingsButtonText>Change password</SettingsButtonText>
                    </SettingsButton>
                    <SettingsButton onClick={() => setDeleteAccountModalShow(true)}>
                        <SettingsDeleteButtonText>Delete account</SettingsDeleteButtonText>
                    </SettingsButton>
                </SettingsButtonWrapper>
            </SettingsBody>
            <ChangePassword
                show={changePasswordModalShow}
                onHide={() => setChangePasswordModalShow(false)}
            />
            <DeleteAccount
                show={deleteAccountModalShow}
                onHide={() => setDeleteAccountModalShow(false)}
            />
        </div>
    );
}