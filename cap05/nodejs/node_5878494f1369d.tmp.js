const prompt = require('prompt-sync')();
const numero = Number(prompt("Digite um número: "));
    for (let i = 1 ; i < numero; i++) {
        if (numero % i === 0) {
            soma += i;  
        }
    }
if (soma === numero) {
    console.log(`${numero} é um número perfeito.`);
} else {
    console.log(`${numero} não é um número perfeito.`);
}  