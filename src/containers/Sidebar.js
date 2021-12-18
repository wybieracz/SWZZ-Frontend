import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { SidebarBody, SidebarButtonWrapper, SidebarButton, SidebarText, SidebarHeaderText, SidebarHeaderItem, SidebarContentItem, SidebarFooterItem } from "../styled/SidebarStyled.js";

export default function Sidebar() {
    return (
        <SidebarBody>
            <ProSidebar>
                <SidebarHeader>
                    <Menu>
                        <SidebarHeaderItem>
                            <MenuItem>
                                <Link to="/home">
                                    <SidebarHeaderText>Jan Kowalski</SidebarHeaderText>
                                </Link>
                            </MenuItem>
                        </SidebarHeaderItem>
                    </Menu>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <SidebarContentItem>
                            <MenuItem>
                                <Link to="/group/home">
                                    <SidebarText>Home</SidebarText>
                                </Link>
                            </MenuItem>
                        </SidebarContentItem>
                        <SidebarContentItem>
                            <MenuItem>
                                <Link to="/group/work">
                                    <SidebarText>Work</SidebarText>
                                </Link>
                            </MenuItem>
                        </SidebarContentItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu>
                        <SidebarFooterItem>
                            <MenuItem>
                                <SidebarButtonWrapper>
                                    <SidebarButton>
                                        <Link to="/">
                                            <SidebarText>Logout</SidebarText>
                                        </Link>
                                    </SidebarButton>
                                </SidebarButtonWrapper>
                            </MenuItem>
                        </SidebarFooterItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </SidebarBody>
    );
}