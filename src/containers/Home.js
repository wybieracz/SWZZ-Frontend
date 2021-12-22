import React from "react";
import TaskList from "../task/TaskList"
import Sidebar from "./Sidebar";
import { HomeBody, HomeSubheading } from "../styled/HomeStyled";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <HomeBody>
        <h1>System wspomagania zarządzania zadaniami</h1>
        <HomeSubheading>Projekt IO</HomeSubheading>
      </HomeBody>
      <TaskList />
    </div>
  );
}