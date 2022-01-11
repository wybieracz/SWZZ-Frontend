import axios from 'axios';

async function getUserNameRequest(setUsername, setIsUsernameLoaded) {
    try {
        await axios.get("https://dev-swzz-be-app.azurewebsites.net/user").then(
            response => {
                setUsername([response.data.name, response.data.surname]);
                setIsUsernameLoaded(true);
            }
        );
    } catch (error) {
        console.error(error);
    }
}

async function getUserGroupsRequest(setGroups, setIsGroupsLoaded) {
    try {
        await axios.get("https://dev-swzz-be-app.azurewebsites.net/user/groups").then(
            response => {
                setGroups(response.data);
                setIsGroupsLoaded(true);
            }
        );
    } catch (error) {
        console.error(error);
    }
}

function getSingleGroup(groups, groupId) {
    return groups.filter(group => {
        return group.groupDTO.groupId === groupId
    })[0];
}

export {getUserNameRequest, getUserGroupsRequest, getSingleGroup }