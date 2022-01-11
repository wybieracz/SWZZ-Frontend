import React, { useEffect, useState } from "react";
import TaskList from "../task/TaskList/TaskList"
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { HomeBody, HomeTitle } from "./HomeStyled";

export default function Home({ username }) {
  return (
    <>
      <HomeBody>
        <HomeTitle>Hi, {username.name} {username.surname}! How are you?</HomeTitle>
      </HomeBody>
      <TaskList groupId={"5"}/>
    </>
  );
}