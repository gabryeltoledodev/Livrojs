const prompt = require('prompt-sync')();
const numero = Number(prompt("N° Chinchilas: ")); 
const anos = Number(prompt("N° anos: "));
let inicial = numero;
console.log(`1° Ano: ${inicial} Chinchilas`);
let total = numero * 3;
for (let i = 2; i <= anos; i++) {   
    console.log(`${i}° Ano: ${total} Chinchilas`);
    total *= 3;
}   


