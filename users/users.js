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
const newUserObj = () => {
    const userName = document.querySelector(".userName").value;
    const phone = document.querySelector(".phone").value;
    const sumcredit = document.querySelector(".sumcredit").value;
    return {
        username: userName,
        personalnumber: phone,
        sumcredit: sumcredit || 0
    }

}

function createUsers() {
    contentByJs.innerHTML = "";
    contentByJs.appendChild(createElements("h1", "הוספת סועד"));
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

    submitBtn.addEventListener("pointerdown", async() => {
        try {
            const data = await createNewUser(newUserObj())
            contentByJs.innerHTML = "";
            contentByJs.appendChild(createElements("h1", `סועד ${data.result.user.username} נוסף בהצלחה`));
        } catch (error) {
            console.log(error)
        }
    })

    contentByJs.appendChild(inputUserName);
    contentByJs.appendChild(inputUserPhone);
    contentByJs.appendChild(sumcredit);
    contentByJs.appendChild(submitBtn);

}