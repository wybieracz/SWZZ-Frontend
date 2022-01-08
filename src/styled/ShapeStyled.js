import styled from "styled-components";

const ShapeWrapper = styled.div`
position: absolute;
top: ${props => props.top};
left: ${props => props.left};
width: 200px;
height: 200px;
`;

export { ShapeWrapper };