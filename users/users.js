import { createElements } from "../script.js";
import { contentByJs } from "../script.js";
import { createNewUser } from "../fetchs/fetchLayer.js";
export function usersBtnFunc() {
    contentByJs.innerHTML = "";
    const addUseritBtn = createElements("button", "הוספת סועד");
    const creditPerUserBtn = createElements("button", "בדיקת יתרת סועד");
    const deleteCreditBtn = createElements("button", "מחיקת סועד");
    const editCreditBtn = createElements("button", "עריכת סועד");
    const allCreditBtn = createElements("button", "כל הסועדים");
    addUseritBtn.addEventListener("pointerdown", createUsers);
    
    contentByJs.appendChild(createElements("h1", "סועדים"));
    contentByJs.appendChild(addUseritBtn);
    contentByJs.appendChild(editCreditBtn);
    contentByJs.appendChild(creditPerUserBtn);
    contentByJs.appendChild(allCreditBtn);
    contentByJs.appendChild(deleteCreditBtn);
    contentByJs.style.display = "flex";
    contentByJs.style.position = "absolute";
}
const a = fetch

function createUsers(){
    contentByJs.innerHTML = "";
    contentByJs.appendChild(createElements("h1", "הוספת סועד"));
    
    const inputUserName = createElements("input")
    inputUserName.className = "createUserInput"
    inputUserName.setAttribute("placeholder", "שם הסועד")
    
    const inputUserPhone = createElements("input")
    inputUserPhone.className = "createUserInput"
    inputUserPhone.setAttribute("placeholder", "טלפון הסועד")
    
    const sumcredit = createElements("input")
    sumcredit.className = "createUserInput"
    sumcredit.setAttribute("placeholder", "יתרת זכות")
    
    const submitBtn = createElements("input")
    submitBtn.type = "button"
    submitBtn.value = "הוספה"
    submitBtn.className = "createUserSubmitBtn"

    submitBtn.addEventListener("pointerdown",createNewUser)
    

    contentByJs.appendChild(inputUserName);
    contentByJs.appendChild(inputUserPhone);
    contentByJs.appendChild(sumcredit);
    contentByJs.appendChild(submitBtn);
    
}