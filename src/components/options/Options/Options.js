import React, { useState } from "react";
import DeleteAccountModal from "../DeleteAccountModal/DeleteAccountModal";
import ChangePasswordModal from "../ChangePasswordModal/ChangePasswordModal";
import {
    OptionsBody,
    OptionsHeader,
    OptionsText,
    OptionsButtonWrapper,
    OptionsButton,
    OptionsDeleteButton
} from "./OptionsStyled";

export default function Options({ user, isUserLoaded, clearUserAndGroups, setIsLogged }) {

    const [validated, setValidated] = useState(false);
    const [changePasswordModalShow, setChangePasswordModalShow] = useState(false);
    const [deleteAccountModalShow, setDeleteAccountModalShow] = useState(false);

    return (
        <>
            <OptionsBody>
                <OptionsHeader>Options</OptionsHeader>
                    {isUserLoaded ? 
                        <>
                            <OptionsText>Name: {user.name}</OptionsText>
                            <OptionsText>Surname: {user.surname}</OptionsText>
                        </>
                    : null}
                <OptionsButtonWrapper>
                    <OptionsButton onClick={() => setChangePasswordModalShow(true)}>
                        Change password
                    </OptionsButton>
                    <OptionsDeleteButton onClick={() => setDeleteAccountModalShow(true)}>
                        Delete account
                    </OptionsDeleteButton>
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
                clearUserAndGroups={clearUserAndGroups}
                setIsLogged={setIsLogged}
            />
        </>
    );
}