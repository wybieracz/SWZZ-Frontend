import React, { useState } from "react";
import LoginModal from "../authorization/LoginModal/LoginModal"
import SignupModal from "../authorization/SignupModal/SignupModal"
import { Circle, Triangle, Diamond } from "../../vectors/Shapes";
import { ShapeWrapper } from "../images/Shape/ShapeStyled.js";
import { Logo } from "../../vectors/Logo.js";
import {
  StartBody,
  StartContentWrapper,
  PrimaryStartButton,
  SecondaryStartButton,
  LogoWrapper
} from "./StartPageStyled";

export default function Home() {

  const [validated, setValidated] = useState(false);
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
      <SignupModal
        show={signupModalShow}
        onHide={() => { setValidated(false); setSignupModalShow(false); }}
        validated={validated}
        setValidated={(props) => setValidated(props)}
      />
      <LoginModal
        show={loginModalShow}
        onHide={() => { setValidated(false); setLoginModalShow(false); }}
        validated={validated}
        setValidated={(props) => setValidated(props)}
      />
    </>
  );
}