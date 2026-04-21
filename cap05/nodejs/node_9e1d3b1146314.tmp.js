const prompt = require("prompt-sync")();
const valor = Number(prompt("Digite um valor R$: "));
const num = Number(prompt("N° de parcelas: "));
const valorParcelas = Math.floor(valor / num);  // Math.floor() arredonda para baixo, ou seja, o valor da parcela será o valor inteiro mais próximo, sem considerar os centavos.
const valorFinal = valorParcela + (valor % num); 
for (let i = 1; i < num; i++) {
    console.log(`${i}° parcela: R$ ${valorParcelas.toFixed(2)}`);    
}
console.log(`${num}° parcela: R$ ${valorFinal.toFixed(2)}`); // última parcela recebe o valor restante, que inclui os centavos, garantindo que o valor total seja exatamente igual ao valor original.

