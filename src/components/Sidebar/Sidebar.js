import React, { useState, useEffect } from "react";
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import NewGroupManager from '../group/NewGroupManager/NewGroupManager';
import Logout from '../authorization/Logout/Logout';
import Avatar from '../image/Avatar/Avatar';
import {
    SidebarBody,
    SidebarButtonWrapper,
    SecondarySidebarButton,
    SidebarHeaderText,
    SidebarHeaderItem,
    SidebarContentItem,
    SidebarContentText
} from "./SidebarStyled";

export default function Sidebar({ username, groups, isGroupsLoaded }) {

    const [showEmojis, setShowEmojis] = useState(false);
    const [groupEmoji, setGroupEmoji] = useState(null);
    const [validated, setValidated] = useState(false);
    const [groupModalShow, setGroupModalShow] = useState(false);
    const [newGroupModalShow, setNewGroupModalShow] = useState(false);
    const [createGroupModalShow, setCreateGroupModalShow] = useState(false);
    const [joinGroupModalShow, setJoinGroupModalShow] = useState(false);

    const navigate = useNavigate();

    function handleSettings() {
        navigate("/settings")
    }

    function handleHome() {
        navigate("/")
    }

    function handleGroup(group) {
        navigate(`/group/${group.groupDTO.groupId}`)
    }
    return (
        <SidebarBody>
            <ProSidebar>
                <SidebarHeader>
                    <Menu>
                        <MenuItem>
                            <SidebarHeaderItem onClick={handleHome}>
                                <Avatar name={username.name} surname={username.surname} isLoaded={username.isLoaded} />
                                <SidebarHeaderText>{username.name} {username.surname}</SidebarHeaderText>
                            </SidebarHeaderItem>
                        </MenuItem>
                    </Menu>
                </SidebarHeader>
                <SidebarContent>
                    { isGroupsLoaded ? 
                        <Menu>
                            {groups.map((group, index) => (
                                <MenuItem key={index}>
                                    <SidebarContentItem onClick={() => handleGroup(group)}>
                                        <SidebarContentText>{group.groupDTO.icon + " " + group.groupDTO.name}</SidebarContentText>
                                    </SidebarContentItem>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                <SidebarContentItem onClick={() => { setGroupModalShow(true); setNewGroupModalShow(true); }}>
                                    <SidebarContentText>➕ New group</SidebarContentText>
                                </SidebarContentItem>
                            </MenuItem>
                        </Menu>
                    : null }
                </SidebarContent>
                <SidebarFooter>
                    <Menu>
                        <SidebarButtonWrapper>
                            <SecondarySidebarButton onClick={handleSettings}>Options</SecondarySidebarButton>
                            <Logout />
                        </SidebarButtonWrapper>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
            <NewGroupManager
                show={groupModalShow}
                newGroupShow={newGroupModalShow}
                createGroupShow={createGroupModalShow}
                joinGroupShow={joinGroupModalShow}
                onHide={() => {
                    setValidated(false);
                    setGroupEmoji(null);
                    setShowEmojis(false);
                    setNewGroupModalShow(false);
                    setCreateGroupModalShow(false);
                    setJoinGroupModalShow(false);
                    setGroupModalShow(false);
                }}
                handleCreateGroup={() => { setCreateGroupModalShow(true); setNewGroupModalShow(false); }}
                handleJoinGroup={() => { setJoinGroupModalShow(true); setNewGroupModalShow(false); }}
                validated={validated}
                setValidated={(props) => setValidated(props)}
                groupEmoji={groupEmoji}
                setGroupEmoji={(props) => setGroupEmoji(props)}
                showEmojis={showEmojis}
                setShowEmojis={(props) => setShowEmojis(props)}
            />
        </SidebarBody>
    );
}