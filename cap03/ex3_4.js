const prompt = require("prompt-sync")()
const peso = Number(prompt("Peso da Ração (Kg): "))
const consumo = Number(prompt("Consumo Diário (Gr): "))
const pesoGr = peso * 1000 // cria variável auxiliar pesoGr
const duracao = Math.floor(pesoGr / consumo)
const sobra = pesoGr % consumo 
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra ${sobra}Gr`)