import React from "react";
import TaskList from "../task/TaskList"
import Sidebar from "./Sidebar";
import { GroupBody, GroupTitle } from "../styled/GroupStyled";

export default function Group() {
  return (
    <div>
      <Sidebar />
      <GroupBody>
        <GroupTitle>Group Name</GroupTitle>
      </GroupBody>
      <TaskList />
    </div>
  );
}