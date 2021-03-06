import styled from "styled-components";

const AvatarInitials = styled.div`
border-radius: 50%;
border: 0px;
background: ${props => (props.background)};
height: 50px;
width: 50px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
margin: 5px;
font-size: 18px;
font-weight: 600;
color: white;
`;

export { AvatarInitials };