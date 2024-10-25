import { createElements } from "../script.js";
import { contentByJs } from "../script.js";
export function creditsBtnFunc() {
    contentByJs.innerHTML = "";

    contentByJs.appendChild(createElements("h1", "זיכויים"));
    contentByJs.appendChild(createElements("button", "כל הזיכויים"));
    contentByJs.appendChild(createElements("button","סכום כל הזיכויים"));
    contentByJs.style.display = "flex";
    contentByJs.style.position = "absolute";
}