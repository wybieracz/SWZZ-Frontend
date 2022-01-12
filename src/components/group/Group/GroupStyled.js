import styled from "styled-components";

const GroupBody = styled.div`
position: relative;
margin-left: max(250px, 15%);
padding: 20px 30px 25px 30px;
background: #F7F7F7;
color: #2B2B2B!important;
font-weight: 900;
display: flex;
text-align: center;
items-align: center;
justify-content: center;
`;

const GroupTitle = styled.div`
color: #2B2B2B!important;
font-weight: bold;
font-size: xx-large;
word-wrap: break-word;
width: 70%;
text-align: left;
`;

const RightWrapper = styled.div`
margin: 20px 0px 0px 0px;
width: 30%;
`

const GroupEditButton = styled.button`
border-radius: 40px;
background: #F7F7F7;
height: 20px;
width: 100px;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
border: 2px solid #2B2B2B;
font-size: 9px;
font-weight: 700;
color: #2B2B2B;
float: right;
margin: 0px 0px 0px 20px;
display: flex;
&:hover{
  background: #545454;
  border: 2px solid #545454;
  color: #E4E4E4;
}
`;

const GroupMembersButton = styled.button`
border-radius: 50%;
border: 0px;
background: #2B2B2B;
color: #FFFFFF;
height: 20px;
width: 20px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
float: right;
font-size: 9px;
font-weight: 700;
margin: 0px 5px 0px 5px;
&:hover {
  background: #545454;
}
`;

const GroupMembersWrapper = styled.div`
margin: 0px 20px 0px 0px;
`;

export { GroupBody, GroupTitle, GroupEditButton, RightWrapper, GroupMembersButton, GroupMembersWrapper };