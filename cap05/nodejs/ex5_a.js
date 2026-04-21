const prompt = require("prompt-sync")();
const fruta = prompt("Digite o nome de uma fruta: ");
const numero = Number(prompt("Digite quantas frutas você quer: "));
for (let i = 1; i <= numero; i++) {
    console.log(`${i}° ${fruta}`);
}
