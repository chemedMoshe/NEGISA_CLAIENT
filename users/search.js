import { searchUserFetch } from '../fetchs/fetchLayer.js';
import { createElements } from '../script.js';

export const searchInput = document.querySelector('.searchInput');
const searchDiv = document.querySelector('.searchDiv');
const resSearchdiv = document.querySelector('.resSearch'); 
const h1Messahe = createElements("h1")
resSearchdiv.appendChild(h1Messahe)
export async function searchUser() {
    const user = searchInput.value
    resSearchdiv.innerHTML = ""
    if (user.length == 0) return
    const resSearch = user.length >= 1 ? await searchUserInDB(user) : await searchUserInLocal(user)
    console.log(resSearch);
    if(resSearch.length == 1) { 
        h1Messahe.textContent = "לא נמצאו תוצאות"
        return
    }
    insertResSearch(resSearch)

}

async function searchUserInDB(username) {
    const resSearch = await searchUserFetch({ username: username })
    localStorage.setItem("resulteSearch", JSON.stringify(resSearch))
    return resSearch
}

async function searchUserInLocal(username) {
    const users = JSON.parse(localStorage.getItem("resulteSearch")) || []
    return users.filter(x => x.username.includes(username))
}

const table = createElements("table")
    table.classList.add("searchTable")

    const thead = createElements("thead")
    const tr = createElements("tr")
    const thName = createElements("th", "שם")
    const thPhone = createElements("th", "טלפון")
    const thCredit = createElements("th", "יתרת זכות")
    tr.appendChild(thName)
    tr.appendChild(thPhone)
    tr.appendChild(thCredit)
    thead.appendChild(tr)

    const tb = createElements("tbody")
function insertResSearch(users) {
    tb.innerHTML = ""
    users.forEach(user => {
        const tr = createElements("tr")
        tr.appendChild(createElements("td", user.username))
        tr.appendChild(createElements("td", user.personalnumber))
        tr.appendChild(createElements("td", user.sumcredit||0))
        tb.appendChild(tr)
    })
    table.appendChild(thead)
    table.appendChild(tb)

    resSearchdiv.appendChild(table)
}