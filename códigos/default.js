// estrutura switch-case (estrutura de decisão)
// palavras-chave: switch/case/break/default
let fruta = "pêra"

switch (fruta) {      // escopo da switch case
    case "laranja":  // caso a variável seja "...": execute ...
    console.log("suco de laranja")
    break      // a inserção do comando break faz com que o programa pare de executar quando a case for compatível
    
    case "banana":
    console.log("vitamina de banana")
    break
    
    case "maçã":
    console.log("suco de maçã") // o código continua a executar as linhas uma vez que foi validada a case. Para alterar, usamos o comando break.
    break

    default:        // quando não houver nenhuma case validada, o código executará a mensagem do default. Se assemelha ao comando else das condicionais.
    console.log("suco genérico")
}