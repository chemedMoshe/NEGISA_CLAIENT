import { createElements } from "../script.js";
import { contentByJs } from "../script.js";
export function creditsBtnFunc() {
    contentByJs.innerHTML = "";
    const h1 = createElements("h1", "זיכויים");
    const addCreditBtn = createElements("button", "הוספת זיכוי");
    const creditPerUserBtn = createElements("button", "זיכויים לפי סועד");
    const allCreditBtn = createElements("button", "כל הזיכויים");
    const deleteCreditBtn = createElements("button", "מחיקת זיכוי");
   
    contentByJs.appendChild(h1);
    contentByJs.appendChild(addCreditBtn);
    contentByJs.appendChild(creditPerUserBtn);
    contentByJs.appendChild(allCreditBtn);
    contentByJs.appendChild(deleteCreditBtn);
    contentByJs.style.display = "flex";
}