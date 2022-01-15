import React from "react";
import { MiniAvatarInitials } from "./MiniAvatarStyled";
import colorGenerator from "../../../colors/ColorGenerator";
import "../../../colors/ColorGenerator.js"

export default function MiniAvatar ({ user }) {
    const [primaryColor] = colorGenerator(user);
    return ( <MiniAvatarInitials background={primaryColor}>{user.name[0] + user.surname[0]}</MiniAvatarInitials> );
};