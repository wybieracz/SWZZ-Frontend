import axios from "axios";
const API_URL = "https://dev-swzz-be-app.azurewebsites.net/";

async function getGroupUsersRequest(groupId, setGroupUsers) {
    try {
        await axios.get(`${API_URL}group/users?groupId=${groupId}`).then(
        response => {
            setGroupUsers(response.data);
        }
        );
    } catch (error) {
        console.error(error);
    }
}

async function putGroupUserRoleRequest(userId, groupId, role) {
    const element = {
        "userId": userId,
        "groupId": groupId,
        "userRole": role
    }
    try {
        await axios.put(`${API_URL}group/user`, element)
    } catch (error) {
        console.error(error);
    }
}

function changeGroupUserRole(userId, groupId, role, groupUsers, setGroupUsers) {
    console.log(userId)
    console.log(groupId)
    console.log(role)
    const result = groupUsers.map((user) =>
        (user.userDTO.userId === userId)
        ? { ...user, role: role }
        : user
    )
    putGroupUserRoleRequest(userId, groupId, role);
    setGroupUsers(result);
    console.log(result);
}

function getGroupIdFromLocation(path) {
    const lastSlashPos = path.lastIndexOf('/');
    return path.substring(lastSlashPos + 1);
}

export { getGroupUsersRequest, changeGroupUserRole, getGroupIdFromLocation }