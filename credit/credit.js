import { createElements } from "../script.js";
import { contentByJs } from "../script.js";
export function creditsBtnFunc() {
    contentByJs.innerHTML = "";
    contentByJs.appendChild(createElements("h1", "זיכויים"));
    contentByJs.appendChild(createElements("button", "הוספת זיכוי"));
    contentByJs.appendChild(createElements("button", "עריכת זיכוי"));
    contentByJs.appendChild(createElements("button", "מחיקת זיכוי"));
    contentByJs.appendChild(createElements("button", "זיכויים לפי סועד"));
    contentByJs.appendChild(createElements("button", "כל הזיכויים"));
    contentByJs.style.display = "flex";
    contentByJs.style.position = "absolute";
}