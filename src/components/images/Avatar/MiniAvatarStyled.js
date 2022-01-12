import styled from "styled-components";

const MiniAvatarInitials = styled.div`
border-radius: 50%;
border: 0px;
background: ${props => (props.background)};
height: 20px;
width: 20px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
margin: 0px 5px 0px 5px;
font-size: 9px;
font-weight: 600;
color: white;
float: right;
`;

export { MiniAvatarInitials };