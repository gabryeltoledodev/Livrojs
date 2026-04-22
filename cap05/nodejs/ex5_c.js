const prompt = require('prompt-sync')();
const numero = Number(prompt("Digite um número: "));
let soma = 0;
for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        soma += i;
        console.log(`Divisor: ${i}`);
    }
}

console.log(`Soma dos divisores: ${soma}`);

if (soma === numero) {
    console.log(`${numero} é um número perfeito.`);
} else {
    console.log(`${numero} não é um número perfeito.`);
}