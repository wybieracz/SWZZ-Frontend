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
import { clearUserAndGroups } from "./AppUtility";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

export default function App() {
  
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(unassignedUser);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [groups, setGroups] = useState([]);
  const [isGroupsLoaded, setIsGroupsLoaded] = useState(false);

  useEffect(() => {
    if(isLogged) {
      getUserNameRequest(setUser, setIsUserLoaded);
      getUserGroupsRequest(setGroups, setIsGroupsLoaded);
    }
  }, [isLogged]);

  useEffect(() => {
    if(user) setIsLogged(true);
  }, [user]);

  function handleClearUserAndGroups() {
    clearUserAndGroups(setUser, setIsUserLoaded, setGroups, setIsGroupsLoaded)
  }

  return (
      <Routes>
        <Route exact path="/start" element={
          <ProtectedStartRoute>
            <StartPage setIsLogged={setIsLogged} />
          </ProtectedStartRoute>} />
        <Route exact path="/" element={
          <ProtectedRoute>
            <Sidebar user={user} isUserLoaded={isUserLoaded} groups={groups} isGroupsLoaded={isGroupsLoaded} clearUserAndGroups={handleClearUserAndGroups} setIsLogged={setIsLogged} />
            <Home user={user} isUserLoaded={isUserLoaded} groups={groups} isGroupsLoaded={isGroupsLoaded} />
          </ProtectedRoute>} />
        <Route exact path="/group/:id" element={
          <ProtectedRoute>
            <Sidebar user={user} isUserLoaded={isUserLoaded} groups={groups} isGroupsLoaded={isGroupsLoaded} clearUserAndGroups={handleClearUserAndGroups} setIsLogged={setIsLogged} />
            <Group user={user} isUserLoaded={isUserLoaded} groups={groups} isGroupsLoaded={isGroupsLoaded} />
          </ProtectedRoute>} />
        <Route exact path="/options" element={
          <ProtectedRoute>
            <Sidebar user={user} isUserLoaded={isUserLoaded} groups={groups} isGroupsLoaded={isGroupsLoaded} clearUserAndGroups={handleClearUserAndGroups} setIsLogged={setIsLogged} />
            <Options user={user} isUserLoaded={isUserLoaded} />
          </ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}