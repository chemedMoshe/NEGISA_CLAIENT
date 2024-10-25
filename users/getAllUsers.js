import {insertUsers} from "./showUsers.js";
import { getAllUsersFetch } from "../fetchs/fetchLayer.js";
import { contentByJs, createElements } from "../script.js";

const updateStatus = createElements("div")
const createMessage = createElements("h2","טוען...")   


export const getAllUsers = async () => {
    try {
        
        updateStatus.style.display = "flex"    
        updateStatus.classList.add("createStatus") 
        updateStatus.appendChild(createMessage);    
        contentByJs.appendChild(updateStatus);

       const allUsers = await getAllUsersFetch()
       localStorage.setItem("allUsers",JSON.stringify(allUsers))
       
       insertUsers(allUsers)
    }
    catch (error) {
        console.log(error)
    }
}