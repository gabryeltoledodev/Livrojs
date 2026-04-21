const prompt = require("prompt-sync")();
const valor = Number(prompt("Digite um valor R$: "));
const num = Number(prompt("N° de parcelas: "));
const valorParcelas = Math.floor(valor / num);  // Math.floor() arredonda para baixo, ou seja, o valor da parcela será o valor inteiro mais próximo, sem considerar os centavos.
const valorFinal = valorParcelas + (valor % num); 
for (let i = 1; i < num; i++) { // O loop começa em 1 e vai até num - 1, garantindo que a última parcela seja tratada separadamente.
    console.log(`${i}° parcela: R$ ${valorParcelas.toFixed(2)}`);    
}
console.log(`${num}° parcela: R$ ${valorFinal.toFixed(2)}`); // última parcela recebe o valor restante, que inclui os centavos, garantindo que o valor total seja exatamente igual ao valor original.

