import React, { useState } from "react";
import Login from "./Login"
import Signup from "./Signup"
import { StartBody, StartSubheading, StartButtonWrapper, StartButton, StartButtonText } from "../styled/StartPageStyled";

export default function Home() {

  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);

  return (
    <div>
      <StartBody>
        <h1>System wspomagania zarządzania zadaniami</h1>
        <StartSubheading>Projekt IO</StartSubheading>
        <StartButtonWrapper>
          <StartButton onClick={() => setSignupModalShow(true)}>
            <StartButtonText>Signup</StartButtonText>
          </StartButton>
          <StartButton onClick={() => setLoginModalShow(true)}>
            <StartButtonText>Login</StartButtonText>
          </StartButton>
        </StartButtonWrapper>
      </StartBody>
      <Signup
        show={signupModalShow}
        onHide={() => setSignupModalShow(false)}
      />
      <Login
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
    </div>
  );
}