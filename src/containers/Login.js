import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { LoginBody, LoginForm, LoginHeader, LoginCheckbox, LoginButtonWrapper, LoginButton, LoginButtonText, LoginItem } from "../styled/LoginStyled.js";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      email,
      password
    })
  }

  return (
    <LoginBody>
      <LoginHeader>Logowanie</LoginHeader>
      <LoginForm>
        <Form onSubmit={handleSubmit}>

          <LoginItem>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                placeholder="Wpisz email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </LoginItem>

          <LoginItem>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Hasło</Form.Label>
              <Form.Control
                placeholder="Wpisz hasło"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </LoginItem>

          <LoginCheckbox>
            <Form.Group size="lg" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Zapamiętaj mnie" />
            </Form.Group>
          </LoginCheckbox>

          <Link to="/home">
            <LoginButtonWrapper>
              <LoginButton type="submit">
                <LoginButtonText>Login</LoginButtonText>
              </LoginButton>
            </LoginButtonWrapper>
          </Link>

        </Form>
      </LoginForm>
    </LoginBody>
  );
}