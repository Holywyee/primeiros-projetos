// = e para atribuicao de valeores em uma variaveu/costante
// == e para comparar o valou de uma variavel com algum outro valor 
let numero = "98"
console.log(numero == 98)

// ===  e para comparar o valou de uma variavel com algum outro valor e comparar tambem o seu formato
let numerio = "888"
console.log (numerio === 445)

// !== e para saber se o valor de uma variavel e diferente de algum outro valor qualquer 

let numeriom = 9999
console.log (numeriom !== 999)

// exemplo pratico

let cpfcacado = '999.888.777.66'
let cpfusuario = '999.888.777.66'
let processo = cpfcacado == cpfusuario
console.log (processo)

let cpfcacado1 = '999.888.777.66'
let cpfusuario1 = '999.888.111.66'
let processo1 = cpfcacado !== cpfusuario
console.log (processo)

// > serve para verificar se um valor e maior que outro

let idadeMinima = 18
let idadeDoUsuario = 16
let resultado = idadeDoUsuario > idadeMinima
console.log(resultado)

// >= serve para verificar se um valor e maior ou igual um outro valor

let idademinima = 18
let idadedousuario = 17
let resumo = idadedousuario >= idademinima
console.log(resumo)