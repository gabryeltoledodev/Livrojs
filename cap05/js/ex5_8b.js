const frm = document.querySelector("form"); // obtém referência ao formulário
const resp = document.querySelector("h3"); // obtém referência ao elemento onde será exibida a resposta
frm.addEventListener("submit", (e) => { // adiciona um ouvinte de evento para o envio do formulário
    e.preventDefault(); // impede o comportamento padrão de envio do formulário
    const chinchilas = Number(frm.inChinchilas.value); // obtém o número de chinchilas a partir do campo de entrada
    const anos = Number(frm.inAnos.value); // obtém o número de anos a partir do campo de entrada
    let total = chinchilas * 3; // calcula o número de chinchilas no segundo ano
    let resposta = `1° Ano: ${chinchilas} Chinchilas<br>`; // inicializa a resposta com o número de chinchilas no primeiro ano
    resp.innerHTML = resposta; // exibe a resposta inicial no elemento h3
    for (let i = 2; i <= anos; i++) {   // itera do segundo ano até o número de anos especificado
        resposta += `${i}° Ano: ${total} Chinchilas<br>`; // adiciona o número de chinchilas para o ano atual à resposta
        total *= 3; // calcula o número de chinchilas para o próximo ano multiplicando o total atual por 3
    }
    resp.innerHTML = resposta;  // exibe a resposta completa no elemento h3, usando innerHTML para interpretar as quebras de linha
});