import React from "react";
import { Button } from "react-bootstrap";
import { HomeBody } from "../styled/HomeStyled";

export default function Home() {

  const funkcja = () => {
    const requestOptions = {
      method: 'GET',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' }
  };
  fetch('https://dev-swzz-be-app.azurewebsites.net/api/ApplicationUser', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <HomeBody>
      <h1>System wspomagania zarządzania zadaniami</h1>
      <p className="text-muted">Projekt IO</p>
      <Button onClick={() => funkcja()}>
        Kliknij mnie
      </Button>
    </HomeBody>
    
  );
}