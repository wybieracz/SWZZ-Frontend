import axios from "axios";
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

async function getGroupUsersRequest(groupId, setGroupUsers) {
    try {
        await axios.get(API_URL + "group/users?groupId=" + groupId).then(
        response => {
            setGroupUsers(response.data);
        }
        );
    } catch (error) {
        console.error(error);
    }
}

function getGroupIdFromLocation(path) {
    const lastSlashPos = path.lastIndexOf('/');
    return path.substring(lastSlashPos + 1);
}

export { getGroupUsersRequest, getGroupIdFromLocation }