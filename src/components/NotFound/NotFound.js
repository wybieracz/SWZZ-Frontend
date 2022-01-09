import React from "react";
import { useNavigate } from 'react-router-dom';
import NotFoundIcon from "../../bitmaps/Not_Found_Icon.png";
import {
  NotFoundBody,
  NotFoundContentWrapper,
  NotFoundHeader,
  NotFoundButton
} from "./NotFoundStyled.js";

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <NotFoundBody>
      <NotFoundContentWrapper>
        <NotFoundHeader>Sorry, page not found!</NotFoundHeader>
        <img src={NotFoundIcon} alt="NotFoundIcon" width="128px" heigth="128px" />
        <NotFoundButton onClick={() => navigate("/")}>Go to home</NotFoundButton>
      </NotFoundContentWrapper>
    </NotFoundBody>
  );
}