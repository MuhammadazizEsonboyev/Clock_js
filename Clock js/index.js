setInterval(setClock, 1000) 
    
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secontHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const secontRatio = currentDate.getSeconds() / 60; // getSecond current datadan chaqiaraypdi soniyani bilish uchun
    const minutesRatio = (secontRatio + currentDate.getMinutes()) / 60;// getSecond currentDatadan chaqiaraypdi soniyani bilish uchun
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; // getSecond currentDatadan chaqiaraypdi soniyani bilish uchun
    setRoutation(secontHand, secontRatio);
    setRoutation(minuteHand, minutesRatio);
    setRoutation(hourHand, hoursRatio);
}



function setRoutation(element, rotationRadio){
    element.style.setProperty('--rotation', rotationRadio * 360);
}
setClock()

//setProperty CSS deklaratsiyasi blokida yangi CSS xususiyatini o'rnatadi yoki mavjud CSS xususiyatini o'zgartiradi
//new Date() vaxtni bilib beradi