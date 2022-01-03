import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { SidebarBody, SidebarButtonWrapper, PrimarySidebarButton, SecondarySidebarButton, SidebarButtonText, SidebarHeaderText, SidebarHeaderItem, SidebarContentItem, SidebarContentText } from "../styled/SidebarStyled.js";
import Avatar from '../Avatar.js';

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

        if (result >= 200 && result < 300) {
            localStorage.clear();
            navigate("/");
        }
    }

    function Settings() {
        navigate("/settings")
    }

    function Home() {
        navigate("/home")
    }

    function Group(path) {
        navigate(`/group/${path}`)
    }

    return (
        <SidebarBody>
            <ProSidebar>
                <SidebarHeader>
                    <Menu>
                        <MenuItem>
                            <SidebarHeaderItem onClick={Home}>
                                <Avatar />
                                <SidebarHeaderText>Jan Kowalski</SidebarHeaderText>
                            </SidebarHeaderItem>
                        </MenuItem>
                    </Menu>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem>
                            <SidebarContentItem onClick={() => Group("home")}>
                                <SidebarContentText>Home</SidebarContentText>
                            </SidebarContentItem>
                        </MenuItem>
                        <MenuItem>
                            <SidebarContentItem onClick={() => Group("work")}>
                                <SidebarContentText>Work</SidebarContentText>
                            </SidebarContentItem>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu>
                        <SidebarButtonWrapper>
                            <SecondarySidebarButton onClick={Settings}>Options</SecondarySidebarButton>
                            <PrimarySidebarButton onClick={LogOut}>Logout</PrimarySidebarButton>
                        </SidebarButtonWrapper>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </SidebarBody>
    );
}