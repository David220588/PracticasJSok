export default function countdown(id, limitDate,finalMessage){
    const countd = document.getElementById("countdown")
    const countdownDate = new Date(limitDate).getTime()

    let countdownTempo = setInterval(() =>{
        let now = new Date().getTime(),
        limitTime = countdownDate-now,
        days = Math.floor(limitTime/(1000*60*60*24)),
        hours =("0"+ Math.floor((limitTime %(1000*60*60*24))/(1000*60*60))).slice(-2) ,
        minutes =("0"+ Math.floor((limitTime %(1000*60*60))/(1000*60))).slice(-2) ,
        seconds = ("0"+ Math.floor((limitTime %(1000*60*60*24))/(1000))).slice(-2);

        countd.innerHTML =`<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos
        para el primer dia del año 2024!</h3>`

    },1000)
}