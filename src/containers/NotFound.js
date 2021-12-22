import React from "react";
import Sidebar from "./Sidebar";
import { NotFoundBody } from "../styled/NotFoundStyled.js";

export default function NotFound() {
  return (
    <NotFoundBody>
      <Sidebar />
      <h3>Sorry, page not found!</h3>
    </NotFoundBody>
  );
}