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
import { getUserNameRequest, getUserGroupsRequest } from "./AppUtility";
import { unassignedUser } from "./components/task/DefaultData/DefaultData";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

export default function App() {

  const [user, setUser] = useState(unassignedUser);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [groups, setGroups] = useState([]);
  const [isGroupsLoaded, setIsGroupsLoaded] = useState(false);

  useEffect(() => {
    getUserNameRequest(setUser, setIsUserLoaded);
    getUserGroupsRequest(setGroups, setIsGroupsLoaded);
  }, []);

  return (
      <Routes>
        <Route exact path="/start" element={
          <ProtectedStartRoute>
            <StartPage />
          </ProtectedStartRoute>} />
        <Route exact path="/" element={
          <ProtectedRoute>
            <Sidebar user={user} isUserLoaded={isUserLoaded} groups={groups} isGroupsLoaded={isGroupsLoaded} />
            <Home user={user} isUserLoaded={isUserLoaded} groups={groups} isGroupsLoaded={isGroupsLoaded} />
          </ProtectedRoute>} />
        <Route exact path="/group/:id" element={
          <ProtectedRoute>
            <Sidebar user={user} isUserLoaded={isUserLoaded} groups={groups} isGroupsLoaded={isGroupsLoaded} />
            <Group user={user} isUserLoaded={isUserLoaded} groups={groups} isGroupsLoaded={isGroupsLoaded} />
          </ProtectedRoute>} />
        <Route exact path="/options" element={
          <ProtectedRoute>
            <Sidebar user={user} isUserLoaded={isUserLoaded} groups={groups} isGroupsLoaded={isGroupsLoaded} />
            <Options user={user} isUserLoaded={isUserLoaded} />
          </ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}