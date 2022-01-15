import React, { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { LoadingIconWrapper } from "../../images/Icons/IconsStyled";
import LoadingIcon from "../../../bitmaps/Load_Medium_Grey.png";
import {
    PeekGroupCodeHeader,
    PeekGroupCodeBody,
    PeekGroupCodeButtonWrapper,
    PeekGroupCodeButton,
    PeekGroupCodeButtonText
} from "./PeekGroupCodeModalStyled.js";
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

export default function PeekGroupCodeModal(props) {

    const [groupCode, setGroupCode] = useState("");
    const [isGroupCodeLoaded, setIsGroupCodeLoaded] = useState(false);

    useEffect(() => {
        getGroupCodeRequest(setGroupCode, setIsGroupCodeLoaded);
    }, []);

    async function getGroupCodeRequest(setGroupCode, setIsGroupCodeLoaded) {
        try {
            await axios.get(API_URL + "group/code?groupId=" + props.groupId).then(
                response => {
                    setGroupCode([response.data]);
                    setIsGroupCodeLoaded(true);
                }
            );
        } catch (error) {
            console.error(error);
            alert("Something went wrong :(")
        }
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <PeekGroupCodeHeader>Group Code</PeekGroupCodeHeader>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {isGroupCodeLoaded ?
                    <PeekGroupCodeBody>{groupCode}</PeekGroupCodeBody>
                    :
                    <LoadingIconWrapper size="20px">
                        <img src={LoadingIcon} alt="LoadingIcon" width="20px" heigth="20px" />
                    </LoadingIconWrapper>
                }
            </Modal.Body>

            <Modal.Footer>
                <CopyToClipboard text={groupCode}
                    onCopy={() => props.setCopied(true)}>
                    <PeekGroupCodeButtonWrapper>
                        <PeekGroupCodeButton copied={props.copied}>
                            {props.copied ? "Copied" : "Copy to clipboard" }
                        </PeekGroupCodeButton>
                    </PeekGroupCodeButtonWrapper>
                </CopyToClipboard>
            </Modal.Footer>

        </Modal>
    );
}