import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedStartRoute from "./protectedRoutes/ProtectedStartRoute"
import ProtectedRoute from "./protectedRoutes/ProtectedRoute"
import StartPage from "./components/StartPage/StartPage";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Group from "./components/group/Group/Group";
import Settings from "./components/settings/Settings/Settings";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

export default function App() {
  return (
      <Routes>
        <Route exact path="/start" element={<ProtectedStartRoute><StartPage /></ProtectedStartRoute>} />
        <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route exact path="/group/:id" element={<ProtectedRoute><Group /></ProtectedRoute>} />
        <Route exact path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}