import React, { useState } from "react";
import Login from "./Login"
import Signup from "./Signup"
import { StartBody, StartContentWrapper, PrimaryStartButton, SecondaryStartButton, LogoWrapper } from "../styled/StartPageStyled";
import { Circle, Triangle, Diamond } from "../vectors/Shapes";
import { ShapeWrapper } from "../styled/ShapeStyled.js";
import { Logo } from "../vectors/Logo.js";

export default function Home() {

  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);

  return (
    <>
      <StartBody>
      <ShapeWrapper left="calc(50vw - 275px)" top="calc(50vh - 335px)"><Circle /></ShapeWrapper>
      <ShapeWrapper left="calc(50vw - 180px)" top="calc(50vh + 150px)"><Triangle /></ShapeWrapper>
      <ShapeWrapper left="calc(50vw + 130px)" top="calc(50vh - 100px)"><Diamond /></ShapeWrapper>
        <StartContentWrapper>
        <LogoWrapper><Logo /><b>SWZZ App</b></LogoWrapper>
          <SecondaryStartButton onClick={() => setSignupModalShow(true)}>
            Signup
          </SecondaryStartButton>
          <PrimaryStartButton onClick={() => setLoginModalShow(true)}>
            Login
          </PrimaryStartButton>
        </StartContentWrapper>
      </StartBody>
      <Signup
        show={signupModalShow}
        onHide={() => setSignupModalShow(false)}
      />
      <Login
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
    </>
  );
}