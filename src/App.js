import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"
import StartPage from "./containers/StartPage";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Group from "./containers/Group";
import Settings from "./containers/Settings";
import Password from "./containers/ChangePassword";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

export default function App() {
  return (
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route exact path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route exact path="/group/:id" element={<ProtectedRoute><Group /></ProtectedRoute>} />
        <Route exact path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route exact path="/settings/password" element={<ProtectedRoute><Password /></ProtectedRoute>} />
        <Route element={<NotFound />} />
      </Routes>
  );
}