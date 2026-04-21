// cria referência ao form e ao elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria um "ouvinte" de evento, acionado quando o botão subimit for clicado 
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value // obtém o conteúdo dos campos 
    const duracao = Number(frm.inDuracao.value) 
    const horas = Math.floor(duracao / 60) // arredonda para baixo resultado 
    const minutos = duracao % 60 // obtém o resto da dvisão 
    
    resp1.innerText = `O Filme ${titulo}` // exibe as respostas
    resp2.innerText = `Tem durução ${horas} horas(s) e ${minutos} minuto(s)` 
    e.preventDefault() // evita envio de form
})