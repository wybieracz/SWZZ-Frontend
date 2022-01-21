import axios from 'axios';
import { unassignedUser } from "./components/task/DefaultData/DefaultData";

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

function clearUserAndGroups(setUser, setIsUserLoaded, setGroups, setIsGroupsLoaded) {
    setUser(unassignedUser)
    setIsUserLoaded(false)
    setGroups([])
    setIsGroupsLoaded(false)
}

export { getUserNameRequest, getUserGroupsRequest, clearUserAndGroups }