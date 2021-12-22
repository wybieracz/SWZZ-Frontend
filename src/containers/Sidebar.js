import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { SidebarBody, SidebarButton, SidebarButtonText, SidebarHeaderText, SidebarHeaderItem, SidebarContentItem, SidebarContentText } from "../styled/SidebarStyled.js";

export default function Sidebar() {

    const navigate = useNavigate();

    async function LogOut() {

        let result = await fetch("https://dev-swzz-be-app.azurewebsites.net/logout", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            }
        })

        result = await result.status
        console.log(result);
        if (result >= 200 && result < 300)
            navigate("/");
    }

    return (
        <SidebarBody>
            <ProSidebar>
                <SidebarHeader>
                    <Menu>
                        <MenuItem>
                            <SidebarHeaderItem>
                                <Link to="/home">
                                    <SidebarHeaderText>Jan Kowalski</SidebarHeaderText>
                                </Link>
                            </SidebarHeaderItem>
                        </MenuItem>
                    </Menu>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem>
                            <SidebarContentItem>
                                <Link to="/group/home">
                                    <SidebarContentText>Home</SidebarContentText>
                                </Link>
                            </SidebarContentItem>
                        </MenuItem>
                        <MenuItem>
                            <SidebarContentItem>
                                <Link to="/group/work">
                                    <SidebarContentText>Work</SidebarContentText>
                                </Link>
                            </SidebarContentItem>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu>
                        <MenuItem>
                            <SidebarButton onClick={LogOut}>
                                <SidebarButtonText>Logout</SidebarButtonText>
                            </SidebarButton>
                        </MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </SidebarBody>
    );
}