const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const btnZerar = document.querySelector("#btnZerar")

let resposta = ""
let numContas = 0
let valTotal = 0

// Evento do formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numContas++
    valTotal += valor

    resposta += `${descricao} - R$: ${valor.toFixed(2)}\n`

    resp1.innerText = `${resposta}----------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()
})

// Evento do botão zerar (FORA do submit)
btnZerar.addEventListener("click", () => {
    resposta = ""
    numContas = 0
    valTotal = 0

    resp1.innerText = ""
    resp2.innerText = ""

    frm.inDescricao.focus()
})