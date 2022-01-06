import React, { useEffect, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ChangePasswordForm, ChangePasswordHeader, ChangePasswordErrorText, ChangePasswordButtonWrapper, ChangePasswordButton, ChangePasswordButtonText, ChangePasswordItem } from "../styled/ChangePasswordStyled.js";

export default function ChangePassword(props) {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [oldPasswordErr, setOldPasswordErr] = useState(true);
    const [newPasswordErr, setNewPasswordErr] = useState(true);
    const [samePasswordErr, setSamePasswordErr] = useState(true);
    const [confirmPasswordErr, setConfirmPasswordErr] = useState(true);
    const [PasswordErr, setPasswordErr] = useState(false);

    const [validated, setValidated] = useState(false);
    const [valid, setValid] = useState(false);

    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    const navigate = useNavigate();

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
        setValidated(true);
        if (valid) {
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
                alert("Your password has been changed.")
                navigate("/")
            }
            else {
                setPasswordErr(true);
            }
        }
    }

    return (
        <Modal
            {...props}
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
                                required
                                placeholder="Old password"
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                            {validated && oldPasswordErr && <ChangePasswordErrorText>Please provide a valid password.</ChangePasswordErrorText>}
                            {validated && PasswordErr && <ChangePasswordErrorText>This is not your password.</ChangePasswordErrorText>}
                        </Form.Group>
                    </ChangePasswordItem>

                    <ChangePasswordItem>
                        <Form.Group controlId="newPassword" size="lg">
                            <Form.Label>New password</Form.Label>
                            <Form.Control
                                required
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
                            {validated && newPasswordErr && <ChangePasswordErrorText>Please provide a valid password.</ChangePasswordErrorText>}
                            {validated && samePasswordErr && <ChangePasswordErrorText>Please make sure the old and new password are not the same.</ChangePasswordErrorText>}
                        </Form.Group>
                    </ChangePasswordItem>

                    <ChangePasswordItem>
                        <Form.Group controlId="confirmPassword" size="lg">
                            <Form.Label>Confirm new password</Form.Label>
                            <Form.Control
                                required
                                placeholder="Confirm new password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {validated && confirmPasswordErr && <ChangePasswordErrorText>Please make sure the passwords are the same.</ChangePasswordErrorText>}
                        </Form.Group>
                    </ChangePasswordItem>

                </ChangePasswordForm>
            </Modal.Body>

            <Modal.Footer>
                <ChangePasswordButtonWrapper>
                    <ChangePasswordButton onClick={handlePasswordChange}>
                        <ChangePasswordButtonText>Change password</ChangePasswordButtonText>
                    </ChangePasswordButton>
                </ChangePasswordButtonWrapper>
            </Modal.Footer>

        </Modal>
    );
}