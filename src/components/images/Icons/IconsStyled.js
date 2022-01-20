import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIconWrapper = styled.div`
display: flex;
width: ${props => (props.size)};
heigth: ${props => (props.size)};
align: center;
animation: ${rotate} 1.5s linear infinite;
margin: 10px;

`;

export { LoadingIconWrapper };