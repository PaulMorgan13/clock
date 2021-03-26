const deg = 6; 


const hr = document.querySelector("#hr"); 
const mn = document.querySelector("#min");
const sec = document.querySelector("#sec");


setInterval(()=>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes() *6;
    let ss = day.getSeconds() *6; 


    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`; 

    mn.style.transform = `rotateZ(${mm}deg)`;

    sec.style.transform = `rotate(${ss}deg)`;




})



