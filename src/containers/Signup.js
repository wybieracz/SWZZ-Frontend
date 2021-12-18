import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { SignupBody, SignupForm, SignupHeader, SignupButtonWrapper, SignupButton, SignupButtonText, SignupItem } from "../styled/SignupStyled.js";

export default function Signup() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <SignupBody>
            <SignupHeader>Rejestracja</SignupHeader>
            <SignupForm>
                <Form onSubmit={handleSubmit}>
                    <SignupItem>
                        <div class="row">
                            <div class="col">
                                <Form.Group controlId="name" size="lg">
                                    <Form.Label>Imię</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        required
                                        placeholder="Wpisz imię"
                                        type="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                            </div>
                            <div class="col">
                                <Form.Group controlId="surname" size="lg">
                                    <Form.Label>Nazwisko</Form.Label>
                                    <Form.Control
                                        required
                                        placeholder="Wpisz nazwisko"
                                        type="surname"
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

                    <Link to="/home">
                        <SignupButtonWrapper>
                            <SignupButton type="submit">
                                <SignupButtonText>Signup</SignupButtonText>
                            </SignupButton>
                        </SignupButtonWrapper>
                    </Link>

                </Form>
            </SignupForm>
        </SignupBody>
    );
}