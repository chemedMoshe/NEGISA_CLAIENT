import { deleteUserFetch } from "../fetchs/fetchLayer.js";
import { contentByJs, createElements } from "../script.js";
import { insertUsers ,table} from "./showUsers.js"
export async function deleteUser(event,user) {
    try{
        
        const userToDelete = {
            username:user.username,
            personalnumber:user.personalnumber
        }
    const deleteStatus = createElements("div")
    deleteStatus.classList.add("deleteStatus") 
    const deleteMessage = createElements("h2","טוען...")   
    deleteStatus.appendChild(deleteMessage);    
    contentByJs.appendChild(deleteStatus);
    const response = await deleteUserFetch(userToDelete);
    
    if(response.err){
        deleteMessage.innerHTML = ""
        deleteMessage.textContent = response.message
        //להוסיף כפתור למחיקת תוכן וסגירת הדיב
        return
    }
    deleteStatus.innerHTML = ""
    const allUsers = JSON.parse(localStorage.getItem("allUsers"))
    
    
    const currentUser = allUsers.filter(user => user.personalnumber != userToDelete.personalnumber)
    insertUsers(currentUser)
   
    localStorage.setItem("allUsers",JSON.stringify(currentUser))
}catch(error){
    console.log(error);
}
}