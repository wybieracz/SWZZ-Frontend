import styled from "styled-components";
import { GreyLight, GreyDark, GreyNight } from "../../../colors/Colors";

const GroupUsersHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
color: ${GreyNight};
`;

const GroupUser = styled.div`
display: flex;
margin: 5px 10px 5px 10px;
padding: 5px;
justify-content: space-between;
background: ${GreyLight};
border-radius: 20px;
`;

const GroupUserName = styled.div`
font-size: 16px;
font-weight: 600;
text-align: left;
items-align: left;
display: flex;
color: ${GreyNight};
width: 28%;
overflow: hidden;
`;

const GroupUsersDot = styled.div`
width: 16px;
height: 16px;
display: inline-block;
border-radius: 50%;
background: ${props => props.background};
margin: 4px 8px 0px 8px;
`;

const GroupUserId = styled.div`
font-size: 10px;
font-weight: 500;
display: flex;
margin: 10px 40px 0px 0px;
color: ${GreyDark};
`;

const Buttons = styled.div`
display: flex;
align-items: center;
`;

export {
  GroupUsersHeader,
  GroupUser,
  GroupUserName,
  GroupUsersDot,
  GroupUserId,
  Buttons
};