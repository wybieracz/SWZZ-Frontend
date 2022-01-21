import axios from 'axios';

async function getUserNameRequest(setUsername, setIsUserLoaded) {
    try {
        await axios.get("https://dev-swzz-be-app.azurewebsites.net/user").then(
            response => {
                setUsername(response.data);
                setIsUserLoaded(true);
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

export { getUserNameRequest, getUserGroupsRequest }