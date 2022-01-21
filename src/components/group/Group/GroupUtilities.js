import axios from "axios";
axios.defaults.withCredentials = true;
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

    const result = groupUsers.map((user) =>
        (user.userDTO.userId === userId)
        ? { ...user, role: role }
        : user
    )
    putGroupUserRoleRequest(userId, groupId, role);
    setGroupUsers(result);
}

function getGroupIdFromLocation(path) {
    const lastSlashPos = path.lastIndexOf('/');
    return path.substring(lastSlashPos + 1);
}

async function deleteGroupUserRequest(userId, groupId, role) {
    const element = {
        "userId": userId,
        "groupId": groupId,
        "userRole": role
    }
    try {
        await axios.delete(`${API_URL}group/user`, {data: element})
    } catch (error) {
        console.error(error);
    }
}

function deleteGroupUser(userId, groupId, role, groupUsers, setGroupUsers) {
    const result = groupUsers.filter((user) => (user.userDTO.userId !== userId))
    deleteGroupUserRequest(userId, groupId, role)
    setGroupUsers(result)
}

export { getGroupUsersRequest, changeGroupUserRole, getGroupIdFromLocation, deleteGroupUser }