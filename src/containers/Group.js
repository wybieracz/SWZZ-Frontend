import React from "react";
import TaskList from "../task/TaskList"
import Sidebar from "./Sidebar";
import { GroupBody, GroupSubheading } from "../styled/GroupStyled";

export default function Group() {
  return (
    <div>
      <Sidebar />
      <GroupBody>
        <h1>Group Name</h1>
        <GroupSubheading>Jan Kowalski</GroupSubheading>
      </GroupBody>
      <TaskList />
    </div>
  );
}