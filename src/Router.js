import React from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "./containers/StartPage";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound";
import TaskList from "./task/TaskList";
import Sidebar from "./containers/Sidebar";
import "./App.css";

export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<StartPage />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/signup" element={<Signup />}/>
            <Route exact path="/home" element={<div className="Main"><Sidebar /><Home /></div>}/>
            <Route exact path="/group/home" element={<div className="Main"><Sidebar /><TaskList /></div>}/>
            <Route exact path="/group/work" element={<div className="Main"><Sidebar /><TaskList /></div>}/>
            <Route element={<NotFound />}/>
        </Routes>
    );
}