const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
setInterval(()=>{
    const time = new Date()
    hour.textContent = (time.getHours()%12<10?"0":"") + time.getHours()%12
    min.textContent = (time.getMinutes()<10?"0":"") + time.getMinutes()
    sec.textContent = (time.getSeconds()<10?"0":"") + time.getSeconds()
})