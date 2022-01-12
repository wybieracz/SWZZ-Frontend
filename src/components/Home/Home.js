import React, { useEffect, useState } from "react";
import TaskList from "../task/TaskList/TaskList"
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { HomeBody, HomeTitle } from "./HomeStyled";

export default function Home({ user }) {
  return (
    <>
      <HomeBody>
        <HomeTitle>Hi, {user.name} {user.surname}! How are you?</HomeTitle>
      </HomeBody>
    </>
  );
}