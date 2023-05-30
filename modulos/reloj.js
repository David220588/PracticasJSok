const d=document;

export function digitalClock(clock, btnPlay,btnStop){
    let clockTempo;

    d.addEventListener('click',e =>{
    if(e.target.matches(btnPlay)){
        setInterval(()=>{
            let clockHour = new Date().toLocaleTimeString()
            d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
        },1000)
        e.target.disabled = true 
    }

    if(e.target.matches(btnStop)){
        clearInterval(clockTempo)
        d.querySelector(clock).innerHTML=null
        document.querySelector(btnPlay).disabled = true

    }

})
}

export function alarma(sound,btnPlay,btnStop){
    let alarmaTempo;
    const alarm= d.createElement("audio")
    alarm.src = sound
    d.addEventListener('click',e=>{
        if(e.target.matches(btnPlay)){
            alarmaTempo=setTimeout(()=>{
                alarm.play()
            }, 2000)
            e.target.disabled=true
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmaTempo)
            alarm.pause()
            alarm.currentTime=0
            d.querySelector(btnPlay).disabled=false
        }
    })
}