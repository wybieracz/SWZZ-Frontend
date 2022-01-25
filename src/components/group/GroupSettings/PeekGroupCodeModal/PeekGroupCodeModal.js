import React, { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { LoadingIconWrapper } from "../../../images/Icons/IconsStyled";
import LoadingIcon from "../../../../bitmaps/Load_Medium_Grey.png";
import {
    PeekGroupCodeHeader,
    PeekGroupCodeBody,
    PeekGroupCodeButtonWrapper,
    PeekGroupCodeButton
} from "./PeekGroupCodeModalStyled.js";
axios.defaults.withCredentials = true;
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

export default function PeekGroupCodeModal(props) {

    const [groupCode, setGroupCode] = useState("");
    const [isGroupCodeLoaded, setIsGroupCodeLoaded] = useState(false);

    useEffect(() => {
        getGroupCodeRequest();
    }, [props.groupId]);

    async function getGroupCodeRequest() {
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

    async function resetGroupCodeRequest() {
        setIsGroupCodeLoaded(false);
        try {
            await axios.put(API_URL + "group/code?groupId=" + props.groupId).then(
                response => {
                    setGroupCode([response.data]);
                    setIsGroupCodeLoaded(true);
                    props.setCopied(false);
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
                <PeekGroupCodeBody>
                    {isGroupCodeLoaded ?
                        <span>{groupCode}</span>
                        :
                        <LoadingIconWrapper size="40px">
                            <img src={LoadingIcon} alt="LoadingIcon" width="40px" heigth="40px" />
                        </LoadingIconWrapper>
                    }
                </PeekGroupCodeBody>
            </Modal.Body>

            <Modal.Footer>
                <PeekGroupCodeButtonWrapper>
                    <CopyToClipboard text={groupCode}
                        onCopy={() => props.setCopied(true)}>
                        <PeekGroupCodeButton copied={props.copied}>
                            {props.copied ? "Copied" : "Copy to clipboard"}
                        </PeekGroupCodeButton>
                    </CopyToClipboard>
                    <PeekGroupCodeButton onClick={resetGroupCodeRequest}>
                        Reset Code
                    </PeekGroupCodeButton>
                </PeekGroupCodeButtonWrapper>
            </Modal.Footer>

        </Modal>
    );
}