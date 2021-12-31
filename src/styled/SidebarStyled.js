import styled from "styled-components";

const SidebarBody = styled.div`
height: 100%;
min-width: 250px;
width: 15%;
position: fixed;
top: 0;
left: 0;
overflow-x: hidden;
`;

const SidebarButtonWrapper = styled.div`
display: inline;
align-items: center;
justify-content: center;
flex: 1 1 0%;
flex-direction: column;
justify-content: space-evenly;
`;

const SidebarButton = styled.button`
border-radius: 40px;
background: rgb(209, 209, 209);
color: #adadad;
height: 40px;
width: 80%;
min-width: 200px;
display: inline;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 20px max(25px, 10%) 0px max(25px, 10%);
&:hover{
  background:rgb(161, 161, 161);
}
`;

const SidebarButtonText = styled.span`
font-size: 18px;
font-weight: bold;
color: rgb(46, 46, 46);
`;

const SidebarHeaderText = styled.div`
font-size: 20px;
padding: 2rem;
font-weight: bold;
text-overflow: ellipsis;
color: black;
`;

const SidebarHeaderItem = styled.div`
&:hover{
  background:rgb(209, 209, 209);
}
`;

const SidebarContentItem = styled.div`
padding: 2rem 0rem;
font-weight: bold;
color: black;
&:hover{
  background:rgb(209, 209, 209);
}
`;

const SidebarContentText = styled.span`
font-size: 18px;
padding: 1.3rem 2rem 1.3rem 2rem;
font-weight: bold;
text-overflow: ellipsis;
color: rgb(46, 46, 46);
`;

export { SidebarBody, SidebarButtonWrapper, SidebarButton, SidebarButtonText, SidebarHeaderText, SidebarHeaderItem, SidebarContentItem, SidebarContentText };