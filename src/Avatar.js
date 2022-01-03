import React, { useState } from "react";
import axios from "axios";
import { AvatarInitials } from "./styled/AvatarStyled";
axios.defaults.withCredentials = true;

export default function Avatar () {

    const [initials, setInitials] = useState("");

    async function getInitialsRequest() {
        try {
            await axios.get("https://dev-swzz-be-app.azurewebsites.net/user").then(
            response => {
                const result = response.data.name[0] + response.data.surname[0];
                setInitials(result);
            }
            );
        } catch (error) {
            console.error(error);
        }
    }
    getInitialsRequest();
    return (
        <AvatarInitials>{initials}</AvatarInitials>
        );
};