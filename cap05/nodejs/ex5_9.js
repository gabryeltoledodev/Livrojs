const prompt = require('prompt-sync')();
const produto = prompt('Digite o nome do produto: ');
const num = Number(prompt("Nº de Etiquetas:"))
// Cria uma laço de repetição até num/2 (pois imprime 2 etiquetas por linha)
for (let i = 1; i <= num / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`);
} 
if (num % 2 !== 0) { // Verifica se num é ímpar, se for imprime mais uma etiqueta
    console.log(produto);
}
