import React, { useEffect, useState } from "react";
import TaskList from "../task/TaskList/TaskList"
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { HomeBody, HomeTitle } from "./HomeStyled";

export default function Home() {

  const [[name, surname], setUsername] = useState(["-----", "-----"]);

  useEffect(() => {
    getUserNameRequest();
  }, []);

  async function getUserNameRequest() {
    try {
      await axios.get("https://dev-swzz-be-app.azurewebsites.net/user").then(
        response => {
          setUsername([response.data.name, response.data.surname]);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Sidebar />
      <HomeBody>
        <HomeTitle>Hi, {name} {surname}! How are you?</HomeTitle>
      </HomeBody>
      <TaskList />
    </>
  );
}