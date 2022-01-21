import React from "react";
import { useNavigate } from 'react-router-dom';
import { PrimarySidebarButton } from "../../Sidebar/SidebarStyled";

export default function Logout({ clearUserAndGroups, setIsLogged }) {

    const navigate = useNavigate();

    async function handleLogout() {

        let result = await fetch("https://dev-swzz-be-app.azurewebsites.net/logout", {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        result = result.status
        if (result >= 200 && result < 300) {
            localStorage.clear();
            navigate("/start");
            clearUserAndGroups();
            setIsLogged(false);
        }
    }

    return (
        <PrimarySidebarButton onClick={handleLogout}>Logout</PrimarySidebarButton>
    );
}