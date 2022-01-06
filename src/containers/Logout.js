import React from "react";
import { useNavigate } from 'react-router-dom';
import { PrimarySidebarButton } from "../styled/LogoutStyled";

export default function Logout() {

    const navigate = useNavigate();

    async function handleLogout() {

        let result = await fetch("https://dev-swzz-be-app.azurewebsites.net/logout", {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json'
            }
        })

        result = await result.status

        if (result >= 200 && result < 300) {
            localStorage.clear();
            navigate("/start");
        }
    }

    return (
        <PrimarySidebarButton onClick={handleLogout}>Logout</PrimarySidebarButton>
    );
}