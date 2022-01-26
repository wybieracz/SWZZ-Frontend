import React, { useState } from "react";
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import NewGroupManager from '../group/NewGroupManager/NewGroupManager';
import Logout from '../authorization/Logout/Logout';
import Avatar from '../images/Avatar/Avatar';
import {
    SidebarBody,
    SidebarButtonWrapper,
    SecondarySidebarButton,
    SidebarHeaderText,
    SidebarHeaderItem,
    SidebarContentItem,
    SidebarContentText
} from "./SidebarStyled";

export default function Sidebar({ user, isUserLoaded, groups, isGroupsLoaded, clearUserAndGroups, setIsLogged, getUserGroups }) {

    const [groupModalShow, setGroupModalShow] = useState(false);
    const [newGroupModalShow, setNewGroupModalShow] = useState(false);

    const userName = handleUserName();
    const navigate = useNavigate();

    function handleUserName() {
        const result = `${user.name} ${user.surname}`
        if(result.length < 17) return result
        else return `${result.slice(0,16)}..`
    }

    function handleGroupName(name) {
        const result = `${name}`
        if(result.length < 19) return result
        else return `${result.slice(0,18)}..`
    }

    function handleOptions() {
        navigate("/options")
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
                                <Avatar user={user} isLoaded={isUserLoaded} />
                                <SidebarHeaderText>{userName}</SidebarHeaderText>
                            </SidebarHeaderItem>
                        </MenuItem>
                    </Menu>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        {isGroupsLoaded ? groups.map((group, index) => (
                            <MenuItem key={index}>
                                <SidebarContentItem onClick={() => handleGroup(group)}>
                                    <SidebarContentText>{group.groupDTO.icon + " " + handleGroupName(group.groupDTO.name)}</SidebarContentText>
                                </SidebarContentItem>
                            </MenuItem>
                        )) : null}
                        <MenuItem>
                            <SidebarContentItem onClick={() => { setNewGroupModalShow(true); }}>
                                <SidebarContentText>➕ New group</SidebarContentText>
                            </SidebarContentItem>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu>
                        <SidebarButtonWrapper>
                            <SecondarySidebarButton onClick={handleOptions}>Options</SecondarySidebarButton>
                            <Logout clearUserAndGroups={clearUserAndGroups} setIsLogged={setIsLogged} />
                        </SidebarButtonWrapper>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
            <NewGroupManager
                show={groupModalShow}
                setGroupModalShow={setGroupModalShow}
                newGroupShow={newGroupModalShow}
                setNewGroupModalShow={setNewGroupModalShow}
                getUserGroups={getUserGroups}
            />
        </SidebarBody>
    );
}