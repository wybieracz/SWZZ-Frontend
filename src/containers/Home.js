import React from "react";
import TaskList from "../task/TaskList"
import Sidebar from "./Sidebar";
import { HomeBody } from "../styled/HomeStyled";
import { GroupTitle } from "../styled/GroupStyled";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <HomeBody>
        <GroupTitle>Hi, `${}`! How are you?</GroupTitle>
      </HomeBody>
      <TaskList />
    </div>
  );
}