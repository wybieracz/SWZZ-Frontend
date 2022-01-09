import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import DeleteAccountModal from "../DeleteAccountModal/DeleteAccountModal";
import ChangePasswordModal from "../ChangePasswordModal/ChangePasswordModal";
import axios from "axios";
import {
    SettingsBody,
    SettingsHeader,
    SettingsText,
    SettingsButtonWrapper,
    SettingsButton,
    SettingsButtonText,
    SettingsDeleteButtonText
} from "./SettingsStyled.js";

export default function Settings() {

    const [validated, setValidated] = useState(false);
    const [[name, surname, email], setUser] = useState(["-----", "-----", "-----"]);
    const [changePasswordModalShow, setChangePasswordModalShow] = useState(false);
    const [deleteAccountModalShow, setDeleteAccountModalShow] = useState(false);

    useEffect(() => {
        getUserRequest();
    }, []);

    async function getUserRequest() {
        try {
            await axios.get("https://dev-swzz-be-app.azurewebsites.net/user").then(
                response => {
                    setUser([response.data.name, response.data.surname, response.data.email]);
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Sidebar />
            <SettingsBody>
                <SettingsHeader>Settings</SettingsHeader>
                <SettingsText>Name: {name}</SettingsText>
                <SettingsText>Surname: {surname}</SettingsText>
                <SettingsText>Email: {email}</SettingsText>
                <SettingsButtonWrapper>
                    <SettingsButton onClick={() => setChangePasswordModalShow(true)}>
                        <SettingsButtonText>Change password</SettingsButtonText>
                    </SettingsButton>
                    <SettingsButton onClick={() => setDeleteAccountModalShow(true)}>
                        <SettingsDeleteButtonText>Delete account</SettingsDeleteButtonText>
                    </SettingsButton>
                </SettingsButtonWrapper>
            </SettingsBody>
            <ChangePasswordModal
                show={changePasswordModalShow}
                onHide={() => { setValidated(false); setChangePasswordModalShow(false); }}
                validated={validated}
                setValidated={(props) => setValidated(props)}
            />
            <DeleteAccountModal
                show={deleteAccountModalShow}
                onHide={() => setDeleteAccountModalShow(false)}
            />
        </>
    );
}