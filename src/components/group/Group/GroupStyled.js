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
width: 70%;
max-width: 70%;
text-align: left;
align-items: left;
justify-content: left;
word-wrap: break-word;
word-break:break-all;
display: flex;
table-layout: fixed;
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

const GroupInfoButton = styled.button`
border-radius: 50%;
border: 0px;
background: #E4E4E4;
color: #FFFFFF;
height: 20px;
min-height: 20px;
width: 20px;
min-width: 20px;
display: flex;
align-items: center;
justify-content: center;
text-overflow: ellipsis;
overflow: hidden;
font-size: 9px;
font-weight: 700;
display: inline;
margin: 18px 0px 0px 10px;
&:hover {
  background: #D1D1D1;
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

const GroupInfoHeader = styled.div`
font-size: 30px;
font-weight: bold;
text-align: left;
display: table;
table-layout: fixed;
width: 100%;
word-wrap: break-word;
`;

const GroupInfoBody = styled.div`
font-size: medium;
word-wrap: break-word;
display: table;
table-layout: fixed;
width: 100%;
`;

export { GroupBody, GroupTitle, GroupInfoButton, GroupEditButton, RightWrapper, GroupMembersButton, GroupMembersWrapper, GroupInfoHeader, GroupInfoBody };