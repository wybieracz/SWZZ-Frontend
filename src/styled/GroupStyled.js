import styled from "styled-components";

const GroupBody = styled.div`
position: relative;
margin-left: max(250px, 15%);
padding: 20px 30px 25px 30px;
background: #F7F7F7;
color: #2B2B2B!important;
font-weight: 900;
`;

const GroupTitle = styled.div`
color: #2B2B2B!important;
font-weight: bold;
font-size: xx-large;
word-wrap: break-word;
`;

const GroupSubheading = styled.span`
color: #6c757d!important;
`;

export { GroupBody, GroupTitle, GroupSubheading };