const creditBtn = document.querySelector(".creditMeinBtn");
const usersBtn = document.querySelector(".usersMeinBtn");
const contentByJs = document.querySelector(".contentByJs");

const createElements = (element, content = "") => {
    const newElement = document.createElement(element);
    if (content) {
        newElement.textContent = content;
    }
    return newElement;
}

creditBtn.addEventListener("pointerdown", creditsBtnFunc)
usersBtn.addEventListener("pointerdown", usersBtnFunc)

function creditsBtnFunc() {
    contentByJs.innerHTML = "";
    const h1 = createElements("h1", "זיכויים");
    const addCreditBtn = createElements("button", "הוספת זיכוי");
    const creditPerUserBtn = createElements("button", "זיכויים לפי סועד");
    const allCreditBtn = createElements("button", "כל הזיכויים");
    contentByJs.appendChild(h1);
    contentByJs.appendChild(addCreditBtn);
    contentByJs.appendChild(creditPerUserBtn);
    contentByJs.appendChild(allCreditBtn);
    contentByJs.style.display = "flex";
}


function usersBtnFunc() {
    contentByJs.innerHTML = "";
    const h1 = createElements("h1", "סועדים");
    const addCreditBtn = createElements("button", "הוספת סועד");
    const creditPerUserBtn = createElements("button", "בדיקת יתרת סועד");
    const allCreditBtn = createElements("button", "כל הסועדים");
    contentByJs.appendChild(h1);
    contentByJs.appendChild(addCreditBtn);
    contentByJs.appendChild(creditPerUserBtn);
    contentByJs.appendChild(allCreditBtn);
    contentByJs.style.display = "flex";
    contentByJs.style.position = "relative";
}


