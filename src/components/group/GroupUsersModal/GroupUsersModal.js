import React from "react";
import { Modal } from 'react-bootstrap';
import { LoadingIconWrapper } from "../../images/Icons/IconsStyled";
import LoadingIcon from "../../../bitmaps/Load_Medium_Grey.png";
import { GroupUsersHeader } from "./GroupUsersModalStyled.js";
import GroupUsersModalElement from "./GroupUsersModalElement";

export default function GroupUsersModal(props) {

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
                    <GroupUsersHeader>Group Members</GroupUsersHeader>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {props.groupUsers ?
                    <>
                        {props.groupUsers.map((member, index) => (
                            <GroupUsersModalElement key={index}
                            index={index}
                            member={member}
                            handleChangeGroupUserRole={props.handleChangeGroupUserRole}
                            user={props.user}
                            isUserLoaded={props.isUserLoaded}
                            deleteGroupUser={props.deleteGroupUser}
                            />
                        ))}
                    </>
                :
                    <LoadingIconWrapper size="20px">
                        <img src={LoadingIcon} alt="LoadingIcon" width="20px" heigth="20px" />
                    </LoadingIconWrapper>
                }
            </Modal.Body>
        </Modal>
    );
}