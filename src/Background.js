import styled from "styled-components";

const BackgroundWrapper = styled.div`
position: absolute;
display: flex;
background: #F7F7F7;
bottom: 0%;
left: 0%;
width: 100%;
height: 100%;
overflow: hidden;
`;

export default function Background() {
    return(
        <BackgroundWrapper />
    )
}