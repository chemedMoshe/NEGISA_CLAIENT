import { createElements } from "../script.js";
import { contentByJs } from "../script.js";
export function usersBtnFunc() {
    contentByJs.innerHTML = "";
    const h1 = createElements("h1", "סועדים");
    const addCreditBtn = createElements("button", "הוספת סועד");
    const creditPerUserBtn = createElements("button", "בדיקת יתרת סועד");
    const deleteCreditBtn = createElements("button", "מחיקת סועד");
    const editCreditBtn = createElements("button", "עריכת סועד");
    const allCreditBtn = createElements("button", "כל הסועדים");
    contentByJs.appendChild(h1);
    contentByJs.appendChild(addCreditBtn);
    contentByJs.appendChild(editCreditBtn);
    contentByJs.appendChild(creditPerUserBtn);
    contentByJs.appendChild(allCreditBtn);
    contentByJs.appendChild(deleteCreditBtn);
    contentByJs.style.display = "flex";
    contentByJs.style.position = "absolute";
}