import React, { useEffect, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoginBody, LoginForm, LoginHeader, LoginCheckbox, LoginErrorText, LoginButtonWrapper, LoginButton, LoginButtonText, LoginItem } from "../styled/LoginStyled.js";

export default function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [emailErr, setEmailErr] = useState(true);
  const [passwordErr, setPasswordErr] = useState(true);

  const [validated, setValidated] = useState(false);
  const [valid, setValid] = useState(false);
  const [validCredentials, setValidCredentials] = useState(true);

  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  const navigate = useNavigate();

  useEffect(() => {
    validEmail.test(email) ? setEmailErr(false) : setEmailErr(true);
    setValidCredentials(true);
  }, [email]);

  useEffect(() => {
    validPassword.test(password) ? setPasswordErr(false) : setPasswordErr(true);
  }, [password]);

  useEffect(() => {
    (emailErr || passwordErr) ? setValid(false) : setValid(true);
  }, [emailErr, passwordErr]);

  async function handleLogin() {
    setValidated(true);
    if (valid) {
      let item = { email, password, rememberMe }
      let result = await fetch("https://dev-swzz-be-app.azurewebsites.net/login", {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          
        }
      })

      result = result.status

      if (result >= 200 && result < 300) {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/");
      }
      else {
        setValidCredentials(false);
      }
    }
  }

  return (
    <LoginBody>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <LoginHeader>Login</LoginHeader>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <LoginForm>

            <LoginItem>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {validated && emailErr && <LoginErrorText>Please provide a valid email.</LoginErrorText>}
                {validated && !validCredentials && <LoginErrorText>Bad credentials.</LoginErrorText>}
              </Form.Group>
            </LoginItem>

            <LoginItem>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {validated && passwordErr && <LoginErrorText>Please provide a valid password.</LoginErrorText>}
              </Form.Group>
            </LoginItem>

            <LoginCheckbox>
              <Form.Group size="lg" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  defaultChecked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  label="Remember me" />
              </Form.Group>
            </LoginCheckbox>

          </LoginForm>
        </Modal.Body>

        <Modal.Footer>
          <LoginButtonWrapper>
            <LoginButton onClick={handleLogin}>
              <LoginButtonText>Login</LoginButtonText>
            </LoginButton>
          </LoginButtonWrapper>
        </Modal.Footer>

      </Modal>
    </LoginBody>
  );
}