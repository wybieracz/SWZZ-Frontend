import React from "react";
import TaskList from "../task/TaskList"
import Sidebar from "./Sidebar";
import { GroupBody } from "../styled/GroupStyled";

export default function Group() {
  return (
    <div>
      <Sidebar />
      <GroupBody>
        <h1>Nazwa grupy</h1>
      </GroupBody>
      <TaskList />
    </div>
  );
}