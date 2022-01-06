import React, { useState } from "react";
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { SidebarBody, SidebarButtonWrapper, SecondarySidebarButton, SidebarHeaderText, SidebarHeaderItem, SidebarContentItem, SidebarContentText } from "../styled/SidebarStyled.js";
import Avatar from '../Avatar.js';
import Logout from './Logout.js';
import GroupCreator from './GroupCreator.js';

export default function Sidebar() {

    const [groupCreatorModalShow, setGroupCreatorModalShow] = useState(false);

    const navigate = useNavigate();

    function handleSettings() {
        navigate("/settings")
    }

    function handleHome() {
        navigate("/")
    }

    function handleGroup(path) {
        navigate(`/group/${path}`)
    }

    return (
        <SidebarBody>
            <ProSidebar>
                <SidebarHeader>
                    <Menu>
                        <MenuItem>
                            <SidebarHeaderItem onClick={handleHome}>
                                <Avatar />
                                <SidebarHeaderText>Jan Kowalski</SidebarHeaderText>
                            </SidebarHeaderItem>
                        </MenuItem>
                    </Menu>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem>
                            <SidebarContentItem onClick={() => handleGroup("home")}>
                                <SidebarContentText>Home</SidebarContentText>
                            </SidebarContentItem>
                        </MenuItem>
                        <MenuItem>
                            <SidebarContentItem onClick={() => handleGroup("work")}>
                                <SidebarContentText>Work</SidebarContentText>
                            </SidebarContentItem>
                        </MenuItem>
                        <SidebarButtonWrapper>
                            <SecondarySidebarButton onClick={() => setGroupCreatorModalShow(true)}>Create group</SecondarySidebarButton>
                        </SidebarButtonWrapper>
                    </Menu>
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
            <GroupCreator
                show={groupCreatorModalShow}
                onHide={() => setGroupCreatorModalShow(false)}
            />
        </SidebarBody>
    );
}