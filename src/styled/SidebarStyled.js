import styled, { css } from "styled-components";

const SidebarBody = styled.div`
height: 100%;
position: fixed;
top: 0;
left: 0;
overflow-x: hidden;
`;

const SidebarButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
`;

const SidebarButton = styled.button`
border-radius: 40px;
background: rgb(209, 209, 209);
color: #adadad;
height: 40px;
width: 100%;
&:hover{
  background:rgb(161, 161, 161);
}
`;

const SidebarText = styled.span`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

const SidebarHeaderText = styled.div`
font-size: 20px;
font-weight: bold;
text-overflow: ellipsis;
padding: 15px;
color: black;
`;

const SidebarHeaderItem = styled.div`
&:hover{
  background:rgb(209, 209, 209);
}
`;

const SidebarContentItem = styled.div`
padding: 15px;
font-weight: bold;
color: black;
&:hover{
  background:rgb(209, 209, 209);
}
`;

const SidebarFooterItem = styled.div`
text-align: center;
align-items: center;
justify-content: center;
`;

export { SidebarBody, SidebarButtonWrapper, SidebarButton, SidebarText, SidebarHeaderText, SidebarHeaderItem, SidebarContentItem, SidebarFooterItem };