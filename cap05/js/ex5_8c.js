const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');
frm.addEventListener('submit', (e) => {
  e.preventDefault();
  const num = Number(frm.inNumero.value);      
    let soma = 0; // Variável para acumular a soma dos divisores
    let divisores = []; // Array para armazenar os divisores encontrados, [] é a sintaxe para criar um array vazio em JavaScript.
    for (let i = 1; i < num; i++) {
        if (num % i === 0) { // Verifica se 'i' é um divisor de 'num'
            soma += i; // Acumula a soma dos divisores
            divisores.push(i); // Adiciona o divisor ao array, push é um método de array que adiciona um elemento ao final do array. 
        }
    }

    resp1.innerHTML = `Divisores do ${num}: ${divisores.join(', ')} (Soma: ${soma})`; // Exibe os divisores encontrados e a soma, join é um método de array que junta todos os elementos do array em uma string, usando o separador especificado (neste caso, ', ').
    if (soma === num) {
        resp2.innerHTML = `${num} é um número perfeito.`;
    }
    else {
        resp2.innerHTML = `${num} não é um número perfeito.`;
    }   
});