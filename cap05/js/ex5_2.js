const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let resposta = `Entre ${numero} e 1: `
    for (let i = numero; i > 0; i--) {
        if (i == 1) {
        resposta = resposta + i + "." // ou resposta = `${resposta}${i}.` 
    } else {
        resposta = resposta + i + ", " // ou resposta = `${resposta}${i}`
    }
    }
    resp.innerText = resposta 
})



// podemos substuir o for pelo while da seguinte forma 
/* 
let i = numero                       // declara e inicializa a variável i
while (i > 0) {                         //enquato i maior 0 
    resposta = resposta + i + ", "          // acumula valores de i 
    i--                                     // decrementa o i (idem a i = i - 1)
}
*/