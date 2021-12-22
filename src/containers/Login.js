import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import { LoginBody, LoginForm, LoginHeader, LoginCheckbox, LoginButtonWrapper, LoginButton, LoginButtonText, LoginItem } from "../styled/LoginStyled.js";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  async function logIn() {

    let item = { email, password, rememberMe }

    let result = await fetch("https://dev-swzz-be-app.azurewebsites.net/login", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
      }
    })

    result = await result.status

    if (result >= 200 && result < 300)
      navigate("/home");
  }

  return (
    <LoginBody>
      <LoginHeader>Logowanie</LoginHeader>
      <LoginForm>

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
            <Form.Check
              type="checkbox"
              defaultChecked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              label="Zapamiętaj mnie" />
          </Form.Group>
        </LoginCheckbox>

      </LoginForm>

      <LoginButtonWrapper>
        <LoginButton onClick={logIn}>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
      </LoginButtonWrapper>

    </LoginBody>
  );
}