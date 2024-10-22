import { createElements } from "../script.js";
import { contentByJs } from "../script.js";
import { createNewUser } from "../fetchs/fetchLayer.js";
import {newUserObj} from '../users/userMain.js'


const inputUserName = createElements("input")
    inputUserName.classList.add("createUserInput")
    inputUserName.classList.add("userName")
    inputUserName.setAttribute("placeholder", "שם הסועד")

const inputUserPhone = createElements("input")
    inputUserPhone.type = "tel"
    inputUserPhone.classList.add("createUserInput")
    inputUserPhone.classList.add("phone")
    inputUserPhone.setAttribute("placeholder", "טלפון הסועד")

const sumcredit = createElements("input")
    sumcredit.type = "number"
    sumcredit.classList.add("createUserInput")
    sumcredit.classList.add("sumcredit")
    sumcredit.setAttribute("placeholder", "יתרת זכות")

const submitBtn = document.createElement("input")

submitBtn.type = "button"
    submitBtn.value = "הוספה"
    submitBtn.className = "createUserSubmitBtn"
    submitBtn.addEventListener("pointerdown", showNewUser)


const h1Message = createElements("h3") 
    
    h1Message.classList.add("statusRequest")   


export function createUsers() {
    contentByJs.innerHTML = "";
    contentByJs.appendChild(createElements("h1", "הוספת סועד"))
    contentByJs.appendChild(inputUserName);
    contentByJs.appendChild(inputUserPhone);
    contentByJs.appendChild(sumcredit);
    contentByJs.appendChild(h1Message);
    contentByJs.appendChild(submitBtn);

}


async function showNewUser() {
    try {
        const data = await createNewUser(newUserObj())
       
        if(data.err){
            h1Message.innerHTML = ""
            h1Message.textContent = data.result.message
            
            return
        }
        h1Message.innerHTML = ""
        inputUserName.value = ""
        inputUserPhone.value = ""
        sumcredit.value = ""
        h1Message.appendChild(createElements("h3", `סועד ${data.result.user.username}, נוסף בהצלחה`));
        h1Message.appendChild(createElements('h2', `יתרה:${data.result.user.sumcredit}`))
        
    } catch (error) {
        contentByJs.innerHTML = "";
        contentByJs.appendChild(createElements("h1", `הוספת סועד נכשלה`));
        contentByJs.appendChild(createElements('h2', `${error}`));
    }
}
