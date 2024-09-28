let date = new Date();

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fullDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

document.getElementById("date-cont").innerHTML = fullDate;

const hourEle = document.getElementById("hours");
const minEle = document.getElementById("minutes");
const secEle = document.getElementById("seconds");

let sec;
let min;
let hours;
setInterval(() => {
    date = new Date();
    sec = date.getSeconds();
    min = date.getMinutes();
    hours = date.getHours() % 12;
    hourEle.innerHTML= hours;
    minEle.innerHTML = min;
    secEle.innerHTML = sec;
}, 1000);



// setInterval(() => {
//     sec += 1;
//     if(sec == 60) {
//         min += 1;
//         sec = 0;
//         if(min == 60) {
//             hours += 1;
//             if(hours == 13) {
//                 hours = 1;
//             }
//             min = 0;
//         }
//     }
    
//     hourEle.innerHTML= hours;
//     minEle.innerHTML = min;
//     secEle.innerHTML = sec;
// }, 1000);
