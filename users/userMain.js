import { createElements } from "../script.js";
import { contentByJs } from "../script.js";
import { createUsers } from "../users/userCreate.js";
import { getAllUsers } from "./getAllUsers.js";
export function usersBtnFunc() {
    contentByJs.innerHTML = "";
    const addUserBtn = createElements("button", "הוספת סועד");
    const allUsersBtn = createElements("button", "כל הסועדים");
    addUserBtn.addEventListener("pointerdown", createUsers);
    allUsersBtn.addEventListener("pointerdown", getAllUsers);

    contentByJs.appendChild(createElements("h1", "סועדים"));
    contentByJs.appendChild(addUserBtn);
    contentByJs.appendChild(allUsersBtn);
    contentByJs.style.display = "flex";
    contentByJs.style.position = "absolute";
}
export const newUserObj = () => {
    const userName = document.querySelector(".userName").value;
    const phone = document.querySelector(".phone").value;
    const sumcredit = document.querySelector(".sumcredit").value;
    return {
        username: userName,
        personalnumber: phone,
        sumcredit: sumcredit || 0
    }

}

