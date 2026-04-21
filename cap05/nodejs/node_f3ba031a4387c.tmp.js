const prompt = require('prompt-sync')();
console.log("Programa Anos de Copa do Mundo, Digite 0 para sair");
console.log("----------------------------------------------------")
do {
    const ano = Number(prompt("Digite o ano da Copa do Mundo: "));
    if (ano === 0) {
        break 
    } else if (ano == 1942 || ano == 1946) {
        console.log(`Não houve Copa do Mundo em ${ano} por conta da (Segunda Guerra Mundial)`);
} else if (ano >= 1930 && ano % 4 == 2) {
    console.log(`Sim! ${ano} é ano de Copa do Mundo!`);
} else {
    console.log(`Não! ${ano} não é ano de Copa do Mundo!`);
}
} while (true);