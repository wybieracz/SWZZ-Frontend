import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedStartRoute from "./protectedRoutes/ProtectedStartRoute"
import ProtectedRoute from "./protectedRoutes/ProtectedRoute"
import StartPage from "./components/StartPage/StartPage";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Group from "./components/group/Group/Group";
import Options from "./components/options/Options/Options";
import Sidebar from "./components/Sidebar/Sidebar.js"
import { getUserNameRequest, getUserGroupsRequest, getSingleGroup } from "./AppUtility";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

export default function App() {

  const [[name, surname], setUsername] = useState(["-----", "-----"]);
  const [isUsernameLoaded, setIsUsernameLoaded] = useState(false);
  const [groups, setGroups] = useState([]);
  const [isGroupsLoaded, setIsGroupsLoaded] = useState(false);

  const username = {
    name: name,
    surname: surname,
    isLoaded: isUsernameLoaded
  }

  useEffect(() => {
    getUserNameRequest(setUsername, setIsUsernameLoaded);
    getUserGroupsRequest(setGroups, setIsGroupsLoaded);
  }, []);

  return (
    <Routes>

      <Route exact path="/start" element={
        <ProtectedStartRoute>
          <StartPage />
        </ProtectedStartRoute>
      } />

      <Route exact path="/" element={
        <ProtectedRoute>
          <Sidebar username={username} groups={groups} isGroupsLoaded={isGroupsLoaded} />
          <Home username={username} />
        </ProtectedRoute>
      } />

      <Route exact path="/group/:id" element={
        <ProtectedRoute>
          <Sidebar username={username} groups={groups} isGroupsLoaded={isGroupsLoaded} />
          <Group groups={groups} isGroupsLoaded={isGroupsLoaded} />
        </ProtectedRoute>
      } />

      <Route exact path="/options" element={
        <ProtectedRoute>
          <Sidebar username={username} groups={groups} isGroupsLoaded={isGroupsLoaded} />
          <Options username={username} />
        </ProtectedRoute>
      } />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}