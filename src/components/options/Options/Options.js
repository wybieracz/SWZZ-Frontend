import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import DeleteAccountModal from "../DeleteAccountModal/DeleteAccountModal";
import ChangePasswordModal from "../ChangePasswordModal/ChangePasswordModal";
import {
    OptionsBody,
    OptionsHeader,
    OptionsText,
    OptionsButtonWrapper,
    OptionsButton,
    OptionsButtonText,
    OptionsDeleteButtonText
} from "./OptionsStyled";

export default function Options({ username }) {

    const [validated, setValidated] = useState(false);
    const [changePasswordModalShow, setChangePasswordModalShow] = useState(false);
    const [deleteAccountModalShow, setDeleteAccountModalShow] = useState(false);

    return (
        <>
            <OptionsBody>
                <OptionsHeader>Options</OptionsHeader>
                <OptionsText>Name: {username.name}</OptionsText>
                <OptionsButtonWrapper>
                    <OptionsButton onClick={() => setChangePasswordModalShow(true)}>
                        <OptionsButtonText>Change password</OptionsButtonText>
                    </OptionsButton>
                    <OptionsButton onClick={() => setDeleteAccountModalShow(true)}>
                        <OptionsDeleteButtonText>Delete account</OptionsDeleteButtonText>
                    </OptionsButton>
                </OptionsButtonWrapper>
            </OptionsBody>
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