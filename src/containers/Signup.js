import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { SignupBody, SignupForm, SignupHeader, SignupErrorText, SignupButtonWrapper, SignupButton, SignupButtonText, SignupItem } from "../styled/SignupStyled.js";

export default function Signup(props) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [nameErr, setNameErr] = useState(true);
    const [surnameErr, setSurnameErr] = useState(true);
    const [emailErr, setEmailErr] = useState(true);
    const [passwordErr, setPasswordErr] = useState(true);
    const [confirmPasswordErr, setConfirmPasswordErr] = useState(true);

    const [validated, setValidated] = useState(false);
    const [valid, setValid] = useState(false);
    const [userExists, setUserExists] = useState(false);

    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    const navigate = useNavigate();

    useEffect(() => {
        name.length > 0 ? setNameErr(false) : setNameErr(true);
    }, [name]);

    useEffect(() => {
        surname.length > 0 ? setSurnameErr(false) : setSurnameErr(true);
    }, [surname]);

    useEffect(() => {
        validEmail.test(email) ? setEmailErr(false) : setEmailErr(true);
    }, [email]);

    useEffect(() => {
        validPassword.test(password) ? setPasswordErr(false) : setPasswordErr(true);
    }, [password]);

    useEffect(() => {
        (validPassword.test(confirmPassword) && !password.localeCompare(confirmPassword)) ? setConfirmPasswordErr(false) : setConfirmPasswordErr(true);
    }, [confirmPassword]);

    useEffect(() => {
        (nameErr || surnameErr || emailErr || passwordErr || confirmPasswordErr) ? setValid(false) : setValid(true);
    }, [nameErr, surnameErr, emailErr, passwordErr, confirmPasswordErr]);

    useEffect(() => {
        setUserExists(false);
    }, [email])

    async function handleSignup() {
        setValidated(true);
        if (valid) {
            let item = { name, surname, email, password }

            let result = await fetch("https://dev-swzz-be-app.azurewebsites.net/register", {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json'
                }
            })

            result = result.status

            if (result >= 200 && result < 300) {
                localStorage.setItem("isAuthenticated", "true");
                navigate("/");
            }
            else {
                setUserExists(true)
            }
        }
    }

    return (
        <SignupBody>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <SignupHeader>Registration</SignupHeader>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <SignupForm>

                        <SignupItem>
                            <div className="row">
                                <div className="col">
                                    <Form.Group controlId="name" size="lg">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            autoFocus
                                            required
                                            placeholder="Name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        {validated && nameErr && <SignupErrorText>Please provide a valid name.</SignupErrorText>}
                                    </Form.Group>
                                </div>
                                <div className="col">
                                    <Form.Group controlId="surname" size="lg">
                                        <Form.Label>Surname</Form.Label>
                                        <Form.Control
                                            required
                                            placeholder="Surname"
                                            type="text"
                                            value={surname}
                                            onChange={(e) => setSurname(e.target.value)}
                                        />
                                        {validated && surnameErr && <SignupErrorText>Please provide a valid surname.</SignupErrorText>}
                                    </Form.Group>
                                </div>
                            </div>
                        </SignupItem>

                        <SignupItem>
                            <Form.Group controlId="email" size="lg">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {validated && emailErr && <SignupErrorText>Please provide a valid email.</SignupErrorText>}
                                {validated && userExists && <SignupErrorText>This user already exists.</SignupErrorText>}
                            </Form.Group>
                        </SignupItem>

                        <SignupItem>
                            <Form.Group controlId="password" size="lg">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    aria-describedby="passwordHelpBlock"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Form.Text id="passwordHelpBlock" muted className="m-auto">
                                    Your password must be at least 8 characters long, contain an uppercase and lowercase letter,
                                    a number and a special character, and must not contain spaces or emoji.
                                </Form.Text>
                                {validated && passwordErr && <SignupErrorText>Please provide a valid password.</SignupErrorText>}
                            </Form.Group>
                        </SignupItem>

                        <SignupItem>
                            <Form.Group controlId="confirmPassword" size="lg">
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Confirm password"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {validated && confirmPasswordErr && <SignupErrorText>Please make sure the passwords are the same.</SignupErrorText>}
                            </Form.Group>
                        </SignupItem>

                    </SignupForm>
                </Modal.Body>

                <Modal.Footer>
                    <SignupButtonWrapper>
                        <SignupButton onClick={handleSignup}>
                            <SignupButtonText>Signup</SignupButtonText>
                        </SignupButton>
                    </SignupButtonWrapper>
                </Modal.Footer>

            </Modal>
        </SignupBody>
    );
}