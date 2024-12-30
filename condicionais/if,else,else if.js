//if

let ovos = true
if(ovos){
    console.log("pode comprar tambem leite")
}

// else

let temporta = true
let entao = ""
if(temporta){
   entao = "abrir porta" 
   console.log("entre pela porta")
    
}
else{
    console.log("destranque a porta e entre")
}

// else if

let nivel = 3
if( nivel === 1){
console.log("falta pouco")
}else if(nivel === 2 ){
    console.log("apenas mais um pouco")
}else{
    nivel = 3
    console.log("vc atingiu o nivel  supremo que e de" + nivel)
}