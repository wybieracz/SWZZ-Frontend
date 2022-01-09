import React from "react";
import TaskList from "../../task/TaskList/TaskList";
import Sidebar from "../../Sidebar/Sidebar";
import { GroupBody, GroupTitle } from "./GroupStyled";

export default function Group() {
  return (
    <>
      <Sidebar />
      <GroupBody>
        <GroupTitle>Group Name</GroupTitle>
      </GroupBody>
      <TaskList />
    </>
  );
}