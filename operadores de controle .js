// && serve para fazer perguntas para consifima se mais de uma variavel esta certa

let idademinima = 18
let visto = true
let casado = false
let filhos = true
console.log ((idademinima >= 18) && (visto === true) && (casado === false) && ( filhos === true))

let moedascoletadas = 888
let itensobtido = "valvula"
console.log((moedascoletadas === 888) && (itensobtido === "valvula" ))

// || serve para verificar se pelo menos uma variavel esta correta

let chuvendo = true
let sair = false
console.log ("e recomendado sair de casa: " + (chuvendo !== false) || (sair === "false"))

// !== serve para diferenciar se uma variavel e diferente de outro resultado

let dinheiro = "limpo"
let verdade = dinheiro !== "limpo"
console.log(verdade)