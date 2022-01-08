import React, { useState, useEffect } from "react";
import { AvatarInitials } from "./styled/AvatarStyled";
import { LoadingIconWrapper } from "./styled/IconsStyled";
import LoadingIcon from "./bitmaps/Load_White.png";
import colorGenerator from "./colors/ColorGenerator";
import "./colors/ColorGenerator.js"
import { GreyDark, GreyNight } from "./colors/Colors";

export default function Avatar ({name, surname, isLoaded}) {
    const [primaryColor, secondaryColor] = colorGenerator(name, surname);
    return (
        <>
            {isLoaded ?
                <AvatarInitials background={primaryColor}>{name[0] + surname[0]}</AvatarInitials> :
                <AvatarInitials background={GreyDark}>
                    <LoadingIconWrapper size="20px">
                    <img src={LoadingIcon} alt="LoadingIcon" width="20px" heigth="20px" />
                </LoadingIconWrapper></AvatarInitials>
            }
        </>
    );
};