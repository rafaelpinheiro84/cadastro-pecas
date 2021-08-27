const listaDePecas = ["Ar conndicionado", "Motor", "Amortecedor"]

console.log(listaDePecas)

if(listaDePecas.length < 10) {
    console.log("É possivel cadastrar mais peças")
} else{
    console.log("Não há mais espaço na lista")
}

var peso = 50;

if(peso > 99) {
    console.log("peso da peça está adequado")
} else {
     console.log("peso insuficiente")
}

let nomePeca = "sfsc";

if (nomePeca.length > 3) {
    console.log("Nome adequado!!")
} else if(nomePeca.length == 0){
    console.log("O nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteres")
}

switch (nomePeca.length) {
    case 0:
        console.log("Onome não pode ser vazio")
        break;

     case 1:
     case 2:
     case 3:
         console.log("O nome deve possuir mais de 3 caracteres")
         break;

    default:
        console.log("Nome adequado!!")
        break;
}
// = -> Atribuição de valor recebe
// == -> Verifica se o valor é igual
// === -> Verifica se o valor, e o tipo de dado, são iguais