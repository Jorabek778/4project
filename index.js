const soniya = document.querySelector('.seconds')
const daqiqa = document.querySelector('.minutes')
const soat = document.querySelector('.hours')
const kun = document.querySelector('.days')
const oy = document.querySelector('.months')
const yil = document.querySelector('.years')

const montharray = [
    'yanvar',
    'fevral',
    'mart',
    'aprel',
    'may',
    'iyun',
    'iyul',
    'avgust',
    'sentabr',
    'oktabr',
    'noyabr',
    'dekabr'
]

function settime(){
    let nowtime = new Date()
   let seconds = nowtime.getSeconds()
   let minutes = nowtime.getMinutes()
   let hours = nowtime.getHours()
   let days = nowtime.getDate()
   let months = nowtime.getMonth()
   let years = nowtime.getFullYear()

   soat.innerHTML = hours>10?hours: `0${hours}`
   daqiqa.innerHTML = minutes>10?minutes: `0${minutes}`
   kun.innerHTML = days>10?days:`0${days}`
   soniya.innerHTML = seconds>10?seconds: `0${seconds}`
   oy.innerHTML = montharray[months]
   yil.innerHTML = years



}

setInterval(() => {
    settime() 

}, 1000);