import React, { useEffect, useState } from "react";
import { Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  LoginBody,
  LoginForm,
  LoginHeader,
  LoginCheckbox,
  LoginError,
  LoginButtonWrapper,
  LoginButton,
  LoginButtonIconWrapper,
  LoginItem,
  LoginErrorCentered
} from "./LoginModalStyled.js";
import { LoadingIconWrapper } from "../../images/Icons/IconsStyled.js";
import LoadingIcon from "../../../bitmaps/Load_White.png";

export default function LoginModal(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [emailErr, setEmailErr] = useState(true);
  const [passwordErr, setPasswordErr] = useState(true);
  const [credentialsErr, setCredentialsErr] = useState(true);

  const [valid, setValid] = useState(false);
  const [isRequestSent, setRequestSent] = useState(false);

  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  const navigate = useNavigate();

  useEffect(() => {
    validEmail.test(email) ? setEmailErr(false) : setEmailErr(true);
    setCredentialsErr(false);
  }, [email]);

  useEffect(() => {
    validPassword.test(password) ? setPasswordErr(false) : setPasswordErr(true);
    setCredentialsErr(false);
  }, [password]);

  useEffect(() => {
    (emailErr || passwordErr) ? setValid(false) : setValid(true);
  }, [emailErr, passwordErr]);

  async function handleLogin() {
    setRequestSent(true)
    props.setValidated(true);
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
        setRequestSent(false)
        props.setIsLogged(true)
      }
      else {
        setCredentialsErr(true);
        setRequestSent(false)
      }
    }
  }

  function onKeyDown(event) {
    if (event.key === "Enter" || event.key === "NumpadEnter") {
      handleLogin();
    }
  }

  return (
    <LoginBody onKeyDown={onKeyDown}>
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
                {props.validated && emailErr && <LoginError>Please provide a valid email.</LoginError>}
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
                {props.validated && passwordErr && <LoginError>Please provide a valid password.</LoginError>}
              </Form.Group>
            </LoginItem>

            <LoginCheckbox>
              <Form.Group size="lg" controlId="rememberMe">
                <Form.Check
                  type="checkbox"
                  defaultChecked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  label="Remember me" />
              </Form.Group>
            </LoginCheckbox>
            {props.validated && credentialsErr && <LoginErrorCentered>Bad credentials.</LoginErrorCentered>}
          </LoginForm>
        </Modal.Body>

        <Modal.Footer>
          <LoginButtonWrapper>
            <LoginButton onClick={handleLogin}> { isRequestSent
              ? <LoginButtonIconWrapper>
                  <LoadingIconWrapper size="20px">
                    <img src={LoadingIcon} alt="LoadingIcon" width="20px" heigth="20px" />
                  </LoadingIconWrapper>
                </LoginButtonIconWrapper>
              : "Login"
            }
            </LoginButton>
          </LoginButtonWrapper>
        </Modal.Footer>

      </Modal>
    </LoginBody>
  );
}