const creditBtn = document.querySelector(".creditMeinBtn");
const usersBtn = document.querySelector(".usersMeinBtn");
const contentByJs = document.querySelector(".contentByJs");

const createElements = (element,content = "") => {
    const newElement = document.createElement(element);
    if (content){
    newElement.textContent = content;
    }
    return newElement;
}

creditBtn.addEventListener("click", creditsBtn)
function creditsBtn() {
   const h1 = createElements("h1","זיכויים");
    const addCreditBtn = createElements("button","הוספת זיכוי");
    const creditPerUserBtn = createElements("button","זיכויים לפי משתמש"); 
    const allCreditBtn = createElements("button","כל הזיכויים");
    contentByJs.appendChild(h1);
    contentByJs.appendChild(addCreditBtn);
    contentByJs.appendChild(creditPerUserBtn);
    contentByJs.appendChild(allCreditBtn);
    contentByJs.style.display = "flex";
   
    

}


