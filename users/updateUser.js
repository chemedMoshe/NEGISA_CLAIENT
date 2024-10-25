import { updateUserFetch } from "../fetchs/fetchLayer.js";
import { contentByJs, createElements } from "../script.js";

const inputUserName = createElements("input")
    inputUserName.classList.add("updateUserInput")

const inputUserPhone = createElements("input")
    inputUserPhone.type = "tel"
    inputUserPhone.classList.add("updateUserInput")

const sumcredit = createElements("input")
    sumcredit.type = "number"
    sumcredit.classList.add("updateUserInput")
function userUpdated(){
    return {username: inputUserName.value, personalnumber: inputUserPhone.value, sumcredit: sumcredit.value}
}

const updateStatus = createElements("div")
const createMessage = createElements("h2","טוען...")   
const updateMessage = createElements("h1")
export function updateUserMain(event, user) {
    
contentByJs.innerHTML = ""

inputUserName.value = user.username

inputUserPhone.value = user.personalnumber

sumcredit.value = user.sumcredit

const submitBtn = createElements("input")
submitBtn.type = "button"
submitBtn.value = "עדכון"
submitBtn.className = "updateUserSubmitBtn"

submitBtn.addEventListener("pointerdown", () => updateUserById(user._id))
const h1Message = createElements("h1", "עדכון סועד")
h1Message.className = "updateUserMessage"

contentByJs.appendChild(h1Message)
contentByJs.appendChild(inputUserName)
contentByJs.appendChild(inputUserPhone)
contentByJs.appendChild(sumcredit)
contentByJs.appendChild(submitBtn)
}


async function updateUserById(id) {
    try {
        
       
        updateStatus.style.display = "flex"    
        updateStatus.classList.add("createStatus") 
        updateStatus.appendChild(createMessage);    
        contentByJs.appendChild(updateStatus);

        const thisUser = userUpdated()
        const response = await updateUserFetch(id, thisUser)
        updateStatus.innerHTML = ""
        updateStatus.style.display = "none"    
        
        
        contentByJs.appendChild(updateMessage)
        
        if (response.err) {
            updateMessage.innerHTML = ""
            updateMessage.textContent = response.message
            return
        }
        updateMessage.innerHTML = ""
        updateMessage.textContent = "עדכון בוצע בהצלחה"
    } catch (error) {
        updateMessage.innerHTML = ""
        updateMessage.textContent = `${error}`
    }
        } 


