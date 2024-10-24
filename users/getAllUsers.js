import {insertUsers} from "./showUsers.js";
import { getAllUsersFetch } from "../fetchs/fetchLayer.js";


export const getAllUsers = async () => {
    try {
       const allUsers = await getAllUsersFetch()
       localStorage.setItem("allUsers",JSON.stringify(allUsers))
       
       insertUsers(allUsers)
    }
    catch (error) {
        console.log(error)
    }
}