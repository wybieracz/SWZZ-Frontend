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

const PrimarySidebarButton = styled.button`
border-radius: 40px;
background: #2B2B2B;
height: 40px;
width: 80%;
min-width: 200px;
display: inline;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 20px max(25px, 10%) 0px max(25px, 10%);
border: 2px solid #2B2B2B;
font-size: 18px;
font-weight: 700;
color: #E4E4E4;
&:hover{
  background: #545454;
  border: 2px solid #545454;
}
`;

const SecondarySidebarButton = styled.button`
border-radius: 40px;
background: #E4E4E4;
height: 40px;
width: 80%;
min-width: 200px;
display: inline;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
margin: 20px max(25px, 10%) 0px max(25px, 10%);
border: 2px solid #2B2B2B;
font-size: 18px;
font-weight: 700;
color: #2B2B2B;
&:hover{
  background: #545454;
  border: 2px solid #545454;
  color: #E4E4E4;
}
`;

const SidebarButtonText = styled.span`
font-size: 18px;
font-weight: 600;
color: #E4E4E4;
`;

const SidebarHeaderText = styled.div`
font-size: 20px;
padding: 2rem 1rem 2rem 1rem;
font-weight: bold;
text-overflow: ellipsis;
color: #2B2B2B;
display: flex;
float: left;
`;

const SidebarHeaderItem = styled.div`
align-items: center;
justify-content: center;
display: flex;
&:hover{
  background: #D1D1D1;
}
`;

const SidebarContentItem = styled.div`
padding: 2rem 0rem;
font-weight: bold;
color: #2B2B2B;
&:hover{
  background: #D1D1D1;
}
`;

const SidebarContentText = styled.span`
font-size: 18px;
padding: 1.3rem 2rem 1.3rem 2rem;
font-weight: bold;
text-overflow: ellipsis;
color: #2B2B2B;
`;

export { SidebarBody, SidebarButtonWrapper, PrimarySidebarButton, SecondarySidebarButton, SidebarButtonText, SidebarHeaderText, SidebarHeaderItem, SidebarContentItem, SidebarContentText };