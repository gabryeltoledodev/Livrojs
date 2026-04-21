const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const a = Number(frm.inA.value)
    const b = Number(frm.inB.value)
    const c = Number(frm.inC.value)

     // Verifica se NÃO forma triângulo
    if (a >= b + c || b >= a + c || c >= a + b) {
        resp1.innerText = `Lados não podem formar um triângulo`
        resp2.innerText = ``
        return
    } 
    // Se chegou aqui, forma triângulo
    resp1.innerText = "Lados podem formar um triângulo"

    if (a == b && a == c) {
        resp2.innerText = "Tipo: Equilátero"
    } else if (a == b || a == c || b == c) {
        resp2.innerText = "Tipo: Isósceles"
    } else {
        resp2.innerText = "Tipo: Escaleno"
    }

})