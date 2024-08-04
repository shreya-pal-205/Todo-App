const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const ol = document.querySelector("ol");

btn.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    let del = document.createElement("button");
    del.innerHTML = "DELETE";
    del.className = "del";

    ol.appendChild(li).appendChild(del);
    input.value = "";
})

ol.addEventListener("click",(e)=>{
    if(e.target.nodeName == "BUTTON"){
        e.target.parentElement.remove();
    }
})










const date = document.querySelector(".date");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

function call(){
    const today = new Date();

    let allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    date.innerHTML = today.getDate();
    day.innerHTML = allDays[today.getDay()];
    month.innerHTML = allMonths[today.getMonth()];
    year.innerHTML = today.getFullYear();
}
call();