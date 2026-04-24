    const cidades = ["Pelotas"] // declara e define conteúdo inical do vetor

    cidades.push("São Lourenço") // adiciona cidade ao final do vetor 
    console.log(cidades) // exibe o conteúdo do vetor no console

    cidades.unshift("Porto Alegre") // adiciona cidade no início do vetor
    console.log(cidades) // exibe o conteúdo do vetor no console

    const ultima = cidades.pop() // remove a última cidade do vetor e armazena em 'ultima'
    console.log(cidades) // exibe o conteúdo do vetor no console

    const primeira = cidades.shift() // remove a primeira cidade do vetor e armazena em 'primeira'
    console.log(cidades) // exibe o conteúdo do vetor no console