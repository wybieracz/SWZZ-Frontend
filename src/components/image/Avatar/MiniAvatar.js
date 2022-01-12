import React from "react";
import { MiniAvatarInitials } from "./MiniAvatarStyled";
import { LoadingIconWrapper } from "../Icons/IconsStyled";
import LoadingIcon from "../../../bitmaps/Load_White.png";
import colorGenerator from "../../../colors/ColorGenerator";
import "../../../colors/ColorGenerator.js"
import { GreyDark } from "../../../colors/Colors";

export default function MiniAvatar ({ user }) {
    const [primaryColor] = colorGenerator(user);
    return ( <MiniAvatarInitials background={primaryColor}>{user.name[0] + user.surname[0]}</MiniAvatarInitials> );
};