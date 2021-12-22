import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import { SignupBody, SignupForm, SignupHeader, SignupButtonWrapper, SignupButton, SignupButtonText, SignupItem } from "../styled/SignupStyled.js";

export default function Signup() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    async function signUp() {
        let item = { name, surname, email, password }

        let result = await fetch("https://dev-swzz-be-app.azurewebsites.net/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json'
            }
        })

        result = await result.status

        if (result >= 200 && result < 300)
            navigate("/home");
    }

    return (
        <SignupBody>
            <SignupHeader>Rejestracja</SignupHeader>
            <SignupForm>

                <SignupItem>
                    <div className="row">
                        <div className="col">
                            <Form.Group controlId="name" size="lg">
                                <Form.Label>Imię</Form.Label>
                                <Form.Control
                                    autoFocus
                                    required
                                    placeholder="Wpisz imię"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="surname" size="lg">
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Wpisz nazwisko"
                                    type="text"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </div>
                </SignupItem>

                <SignupItem>
                    <Form.Group controlId="email" size="lg">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            placeholder="Wpisz email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </SignupItem>

                <SignupItem>
                    <Form.Group controlId="password" size="lg">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control
                            required
                            placeholder="Wpisz hasło"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                </SignupItem>

                <SignupItem>
                    <Form.Group controlId="confirmPassword" size="lg">
                        <Form.Label>Potwierdź hasło</Form.Label>
                        <Form.Control
                            required
                            placeholder="Potwierdź hasło"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                </SignupItem>

            </SignupForm>

            <SignupButtonWrapper>
                <SignupButton onClick={signUp}>
                    <SignupButtonText>Signup</SignupButtonText>
                </SignupButton>
            </SignupButtonWrapper>

        </SignupBody>
    );
}