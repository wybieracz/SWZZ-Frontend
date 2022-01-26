import axios from 'axios';
import { unassignedUser } from "./components/task/DefaultData/DefaultData";

async function getUserNameRequest(setUsername, setIsUserLoaded, navigate, setIsLogged) {
    try {
        await axios.get("https://dev-swzz-be-app.azurewebsites.net/user").then(
            response => {
                setUsername(response.data);
                setIsUserLoaded(true);
            }
        );
    } catch (error) {
        console.error(error);
        setIsLogged(false)
        setIsUserLoaded(false)
        localStorage.clear();
        navigate("/start")
    }
}

async function getUserGroupsRequest(setGroups, setIsGroupsLoaded, navigate, setIsLogged) {
    try {
        await axios.get("https://dev-swzz-be-app.azurewebsites.net/user/groups").then(
            response => {
                setGroups(response.data);
                setIsGroupsLoaded(true);
            }
        );
    } catch (error) {
        console.error(error);
        setIsLogged(false)
        setIsGroupsLoaded(false)
        localStorage.clear();
        navigate("/start")
    }
}

function clearUserAndGroups(setUser, setIsUserLoaded, setGroups, setIsGroupsLoaded) {
    setUser(unassignedUser)
    setIsUserLoaded(false)
    setGroups([])
    setIsGroupsLoaded(false)
}

export { getUserNameRequest, getUserGroupsRequest, clearUserAndGroups }