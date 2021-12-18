import React from "react";
import { Link } from 'react-router-dom';
import { StartBody, StartSubheading, StartButtonWrapper, StartButton, StartButtonText } from "../styled/StartPageStyled";

export default function Home() {
  return (
    <StartBody>
      <h1>System wspomagania zarządzania zadaniami</h1>
      <StartSubheading>Projekt IO</StartSubheading>
      <StartButtonWrapper>
        <Link to="/signup">
          <StartButton>
            <StartButtonText>Signup</StartButtonText>
          </StartButton>
        </Link>
        <Link to="/login">
          <StartButton>
            <StartButtonText>Login</StartButtonText>
          </StartButton>
        </Link>
      </StartButtonWrapper>
    </StartBody>
  );
}