import { createElements } from "../script.js";
import { contentByJs } from "../script.js";

const table = createElements("table");
      table.classList.add("usersTable");

const thead = createElements("thead");
const tr = createElements("tr");
const thName = createElements("th", "שם");
const thPhone = createElements("th", "טלפון");
const thCredit = createElements("th", "יתרת סועד");
const thActions = createElements("th", "פעולות");

tr.appendChild(thName);
tr.appendChild(thPhone);
tr.appendChild(thCredit);
tr.appendChild(thActions);
thead.appendChild(tr);
table.appendChild(thead);
const tbody = createElements("tbody");

export function insertUsers(users) {
    contentByJs.innerHTML = "";
    tbody.innerHTML = "";
    const caption = document.createElement("caption");
    caption.appendChild(createElements("h1","כל הסועדים"));
    table.appendChild(caption);
    users.forEach(user => {
    const tr = createElements("tr");
    tr.appendChild(createElements("td",user.username));
    tr.appendChild(createElements("td",user.personalnumber));
    tr.appendChild(createElements("td",user.sumcredit.toString()));
    
    
    const tdActions = createElements("td");
        tdActions.classList.add("tdActions");
    
    const editBtn = createElements("button","עריכה");
        editBtn.classList.add("editBtn");
    const deleteBtn = createElements("button","מחיקה");
        deleteBtn.classList.add("deleteBtn");
    tdActions.appendChild(editBtn);
    tdActions.appendChild(deleteBtn);
    
    tr.appendChild(tdActions);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    contentByJs.appendChild(table);
})}
