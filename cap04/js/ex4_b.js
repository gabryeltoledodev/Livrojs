const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const velocidade = Number(frm.inVelocidade.value)
    const condutor = Number(frm.inCondutor.value)
    const limite = velocidade * 1.2

    if (condutor <= velocidade) {
        resp.innerText = `Situação: Sem Multa`
    } else if (condutor <= limite) {
        resp.innerText = `Situação: Multa Leve`
    } else {
        resp.innerText = `Situação: Multa Grave`
    }
})