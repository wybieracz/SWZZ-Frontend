import React from "react";
import { MiniAvatarInitials } from "./MiniAvatarStyled";
import { LoadingIconWrapper } from "../Icons/IconsStyled";
import LoadingIcon from "../../../bitmaps/Load_White.png";
import colorGenerator from "../../../colors/ColorGenerator";
import "../../../colors/ColorGenerator.js"
import { GreyDark } from "../../../colors/Colors";

export default function MiniAvatar ({ name, surname }) {
    const [primaryColor] = colorGenerator(name, surname);
    return ( <MiniAvatarInitials background={primaryColor}>{name[0] + surname[0]}</MiniAvatarInitials> );
};