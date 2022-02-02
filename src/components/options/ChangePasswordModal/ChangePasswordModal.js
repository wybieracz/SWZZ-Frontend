import React, { useEffect, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import {
    ChangePasswordForm,
    ChangePasswordHeader,
    ChangePasswordErrorText,
    ChangePasswordButtonWrapper,
    ChangePasswordButton,
    ChangePasswordItem
} from "./ChangePasswordModalStyled";
import { LoadingIconWrapper } from "../../images/Icons/IconsStyled.js";
import LoadingIcon from "../../../bitmaps/Load_White.png";
import { ButtonIconWrapper } from "../Options/OptionsStyled";

export default function ChangePasswordModal(props) {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [oldPasswordErr, setOldPasswordErr] = useState(true);
    const [newPasswordErr, setNewPasswordErr] = useState(true);
    const [samePasswordErr, setSamePasswordErr] = useState(true);
    const [confirmPasswordErr, setConfirmPasswordErr] = useState(true);
    const [PasswordErr, setPasswordErr] = useState(false);

    const [valid, setValid] = useState(false);
    const [isRequestSent, setIsRequestSent] = useState(false);

    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    useEffect(() => {
        validPassword.test(oldPassword) ? setOldPasswordErr(false) : setOldPasswordErr(true);
        oldPassword.localeCompare(newPassword) ? setSamePasswordErr(false) : setSamePasswordErr(true);
        setPasswordErr(false);
    }, [oldPassword]);

    useEffect(() => {
        validPassword.test(newPassword) ? setNewPasswordErr(false) : setNewPasswordErr(true);
        oldPassword.localeCompare(newPassword) ? setSamePasswordErr(false) : setSamePasswordErr(true);
        (!newPassword.localeCompare(confirmPassword)) ? setConfirmPasswordErr(false) : setConfirmPasswordErr(true);
    }, [newPassword]);

    useEffect(() => {
        (validPassword.test(confirmPassword) && !newPassword.localeCompare(confirmPassword)) ? setConfirmPasswordErr(false) : setConfirmPasswordErr(true);
    }, [confirmPassword]);

    useEffect(() => {
        (oldPasswordErr || newPasswordErr || samePasswordErr || confirmPasswordErr) ? setValid(false) : setValid(true);
    }, [oldPasswordErr, newPasswordErr, samePasswordErr, confirmPasswordErr]);

    async function handlePasswordChange() {
        props.setValidated(true);
        if (valid) {
            setIsRequestSent(true)
            let item = { oldPassword, newPassword };

            let result = await fetch("https://dev-swzz-be-app.azurewebsites.net/user/password", {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                }
            })

            result = result.status

            if (result >= 200 && result < 300) {
                setIsRequestSent(false)
                alert("Your password has been changed.")
            }
            else {
                setPasswordErr(true)
                setIsRequestSent(false)
            }
        }
    }

    function onKeyDown(event) {
        if (event.key === "Enter" || event.key === "NumpadEnter") {
            handlePasswordChange();
        }
    }

    return (
        <div onKeyDown={onKeyDown}>
            <Modal
                show={props.show}
                onHide={props.onHide}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <ChangePasswordHeader>Password change</ChangePasswordHeader>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ChangePasswordForm>

                        <ChangePasswordItem>
                            <Form.Group controlId="oldPassword" size="lg">
                                <Form.Label>Old password</Form.Label>
                                <Form.Control
                                    placeholder="Old password"
                                    type="password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                                {props.validated && oldPasswordErr && <ChangePasswordErrorText>Please provide a valid password.</ChangePasswordErrorText>}
                                {props.validated && PasswordErr && <ChangePasswordErrorText>This is not your password.</ChangePasswordErrorText>}
                            </Form.Group>
                        </ChangePasswordItem>

                        <ChangePasswordItem>
                            <Form.Group controlId="newPassword" size="lg">
                                <Form.Label>New password</Form.Label>
                                <Form.Control
                                    placeholder="New password"
                                    type="password"
                                    value={newPassword}
                                    aria-describedby="passwordHelpBlock"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <Form.Text id="passwordHelpBlock" muted className="m-auto">
                                    Your password must be at least 8 characters long, contain an uppercase and lowercase letter,
                                    a number and a special character, and must not contain spaces or emoji.
                                </Form.Text>
                                {
                                    props.validated && newPasswordErr
                                    && <ChangePasswordErrorText>Please provide a valid password.</ChangePasswordErrorText>
                                }
                                {
                                    props.validated && !oldPasswordErr && samePasswordErr
                                    && <ChangePasswordErrorText>Please make sure the old and new password are not the same.</ChangePasswordErrorText>
                                }
                            </Form.Group>
                        </ChangePasswordItem>

                        <ChangePasswordItem>
                            <Form.Group controlId="confirmPassword" size="lg">
                                <Form.Label>Confirm new password</Form.Label>
                                <Form.Control
                                    placeholder="Confirm new password"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {
                                    props.validated && !newPasswordErr && confirmPasswordErr
                                    && <ChangePasswordErrorText>Please make sure the passwords are the same.</ChangePasswordErrorText>
                                }
                            </Form.Group>
                        </ChangePasswordItem>

                    </ChangePasswordForm>
                </Modal.Body>

                <Modal.Footer>
                    <ChangePasswordButtonWrapper>
                        <ChangePasswordButton onClick={handlePasswordChange}>
                            { isRequestSent
                                ? <ButtonIconWrapper>
                                    <LoadingIconWrapper size="20px"><img src={LoadingIcon} alt="LoadingIcon" width="20px" heigth="20px" /></LoadingIconWrapper>
                                </ButtonIconWrapper>
                                : "Change password"
                            }
                        </ChangePasswordButton>
                    </ChangePasswordButtonWrapper>
                </Modal.Footer>

            </Modal>
        </div>
    );
}