const cidades = ["Pelotas", "São Lourenço", "Porto Alegre"]

for (let i = 0; i < cidades.length; i++) { // Exibe o conteúdo do vetor usando for tradicional
  console.log(cidades[i]) 
}

console.log("-".repeat(40)) // Exibe o conteúdo do vetor usando for...of
console.log(cidades.toString()) // Exibe o conteúdo do vetor usando join
console.log(cidades.join(" - ")) // Exibe o conteúdo do vetor usando forEach