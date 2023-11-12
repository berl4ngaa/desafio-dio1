//calculadora de partida ranqueada
//melhorei o script e deixei mais dinamico

var vic = 1110 
var loss = 10 
var saldo = vic - loss 

function validate(saldo)
{
    if(saldo < 11){
        console.log("Você ainda não possui rank!")
    }
    else if(saldo >= 11 && saldo <= 20){
        console.log("Seu rank atual é bronze!\n")
    }
    else if(saldo >= 21 && saldo <= 50){
        console.log("Seu rank atual é prata!\n")
    }
    else if(saldo >= 51 && saldo <= 80){
        console.log("Seu rank atual é ouro!\n")
    }
    else if(saldo >= 81 && saldo <= 90){
        console.log("Seu rank atual é prata!\n")
    }
    else if(saldo >= 91 && saldo <= 101){
        console.log("Seu rank atual é prata!\n")
    }
    return console.log("O herói está com um saldo de ", saldo, " pontos, e possui ",vic,  "vitória(s)")

}

if(saldo < 0){
    console.log("Seu saldo está invalido, jogue mais até alcançar um rank melhor.")
}else{
    validate(saldo)
}
