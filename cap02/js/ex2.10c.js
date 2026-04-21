const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inNome.value
    const preco = Number(frm.inPreco.value)
    const promocao = preco / 2
    const total = (2 * preco) + promocao


    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$: ${promocao.toFixed(2)}`
    e.preventDefault()
})