import { usersBtnFunc } from "./users/userMain.js";
import { creditsBtnFunc } from "./credit/credit.js";
import { searchInput, searchUser } from "./users/search.js";

export const creditBtn = document.querySelector(".creditMeinBtn");
export const usersBtn = document.querySelector(".usersMeinBtn");
export const contentByJs = document.querySelector(".contentByJs");

export function createElements  (element,content)  {
    const newElement = document.createElement(element);
    if (content) newElement.textContent = content

    return newElement;
}

creditBtn.addEventListener("pointerdown", creditsBtnFunc)
usersBtn.addEventListener("pointerdown", usersBtnFunc)
searchInput.addEventListener('input', searchUser);






