import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"
import ProtectedLogin from "./components/ProtectedLogin"
import StartPage from "./containers/StartPage";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Group from "./containers/Group";
import Settings from "./containers/Settings";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

export default function App() {
  return (
      <Routes>
        <Route exact path="/start" element={<ProtectedLogin><StartPage /></ProtectedLogin>} />
        <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route exact path="/group/:id" element={<ProtectedRoute><Group /></ProtectedRoute>} />
        <Route exact path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route element={<NotFound />} />
      </Routes>
  );
}