import { createElements } from "../script.js";
import { contentByJs } from "../script.js";
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

function createUsers(){
    contentByJs.innerHTML = "";
    contentByJs.appendChild(createElements("h1", "הוספת סועד"));
    const inputUserName = createElements("input");
    inputUserName.setAttribute("placeholder", "שם הסועד");
    const inputUserPhone = createElements("input");
    inputUserPhone.setAttribute("placeholder", "טלפון הסועד");
    const sumcredit = createElements("input");
    sumcredit.setAttribute("placeholder", "יתרת זכות");
    contentByJs.appendChild(inputUserName);
    contentByJs.appendChild(inputUserPhone);
    contentByJs.appendChild(sumcredit);
    
}