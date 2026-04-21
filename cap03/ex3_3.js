const prompt = require("prompt-sync")() // adiciona o pacote ao programa
const salario = Number(prompt("Salário de R$: ")) // lê os dados de entrada
const tempo = Number(prompt("Tempo (anos) de trabalho: "))
const quadrienios = Math.floor(tempo / 4) // Math.floor arrendoda para baixo 4.8 = 4 
const acrescimo = salario * quadrienios / 100 // calcula os acrêscimos 
console.log(`Quadriênios: ${quadrienios}`) // exibe as respostas 
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`)