const relogio = document.querySelector("#relogio")
const hora = document.querySelector(".hora")
const minutos = document.querySelector(".minutos")
const segundos = document.querySelector(".segundos")
const data = document.querySelector(".data")


function AttRelogio() {

const infos = new Date() 

let h = infos.getHours()
let m = infos.getMinutes()
let s = infos.getSeconds()
let d = infos.toLocaleDateString()


//Transformando os segundos em String para conseguirmos utilizar o .length
let sec = new String(s)
//Adicionando um 0 caso tenha apenas um número 
if (sec.length == 1) sec = 0+sec;

//Transformando os minutos em String para conseguirmos utilizar o .length
let min = new String(m)
//Adicionando um 0 caso tenha apenas um número 
if (min.length == 1) min = 0+min;

//Transformando as horas em String para conseguirmos utilizar o .length
let hour = new String(h)
//Adicionando um 0 caso tenha apenas um número 
if (hour.length == 1) hour = 0+hour;

//Mudando o texto das div para a váriavel de horas, minutos, segundos e data
hora.innerHTML = hour
minutos.innerHTML = min
segundos.innerHTML = sec
data.innerHTML = d

//Mudando o background conforme as horas vão mudando utilizando o if
if(hour >= 0) relogio.classList.remove("noite"), relogio.classList.add("madrugada")
if(hour >= 5) relogio.classList.remove("madrugada"), relogio.classList.add("amanhecendo")
if(hour >= 8) relogio.classList.remove("amanhecendo"), relogio.classList.add("manha")
if(hour >= 12) relogio.classList.remove("manha"), relogio.classList.add("tarde")
if(hour >= 17) relogio.classList.remove("tarde"), relogio.classList.add("pordosol")
if(hour >= 20) relogio.classList.remove("pordosol"), relogio.classList.add("noite")

//A página do navegador vai ser atualizada a cada 1000ms ou seja 1s
setTimeout("AttRelogio()",1000) 
}

