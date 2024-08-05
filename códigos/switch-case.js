// estrutura switch-case (estrutura de decisão)
// palavras-chave: switch/case/break/default
let fruta = "banana"

switch (fruta) {      // escopo da switch case
    case "laranja":  // caso a variável seja "...": execute ...
    console.log("suco de laranja")
    case "banana":
    console.log("vitamina de banana")
    case "maçã":
    console.log("suco de maçã") // o código continua a executar as linhas uma vez que foi validada a case. Para alterar, usamos o comando break.
}