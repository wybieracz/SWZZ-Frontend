import React from "react";
import { AvatarInitials } from "./AvatarStyled";
import { LoadingIconWrapper } from "../Icons/IconsStyled";
import LoadingIcon from "../../../bitmaps/Load_White.png";
import colorGenerator from "../../../colors/ColorGenerator";
import "../../../colors/ColorGenerator.js"
import { GreyDark } from "../../../colors/Colors";

export default function Avatar ({user, isLoaded}) {
    const [primaryColor, secondaryColor] = colorGenerator(user);
    return (
        <>
            {isLoaded ?
                <AvatarInitials background={primaryColor}>{user.name[0] + user.surname[0]}</AvatarInitials> :
                <AvatarInitials background={GreyDark}>
                    <LoadingIconWrapper size="20px">
                        <img src={LoadingIcon} alt="LoadingIcon" width="20px" heigth="20px" />
                    </LoadingIconWrapper>
                </AvatarInitials>
            }
        </>
    );
};