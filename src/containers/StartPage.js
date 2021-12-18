import React from "react";
import { Link } from 'react-router-dom';
import { StartBody, StartButtonWrapper, StartButton, StartButtonText } from "../styled/StartPageStyled";

export default function Home() {
  return (
    <StartBody>
      <h1>System wspomagania zarządzania zadaniami</h1>
      <p className="text-muted">Projekt IO</p>
      <Link to="/signup">
        <StartButtonWrapper>
          <StartButton
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
          > <StartButtonText>Signup</StartButtonText>
          </StartButton>
        </StartButtonWrapper>
      </Link>
      <Link to="/login">
        <StartButtonWrapper>
          <StartButton
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
          > <StartButtonText>Login</StartButtonText>
          </StartButton>
        </StartButtonWrapper>
      </Link>
    </StartBody>
  );
}