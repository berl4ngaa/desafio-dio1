// classificador de heróis!

let heroi = ["NomeDoHeroi", 0]

let nome = heroi[0]
let nivel = heroi[1]

console.log("O herói de nome ", nome, " está no nível de: ")

if (nivel < 1000) {
    console.log("Nível Ferro!");
} else if (nivel >= 1001 && nivel <= 2000) {
    console.log("Nível Bronze!");
} else if (nivel >= 2001 && nivel <= 5000) {
    console.log("Nível Prata ouro!");
} else if (nivel >= 5001 && nivel <= 8000) {
    console.log("Nível Prata ouro!");
} else if (nivel >= 8001 && nivel <= 9000) {
    console.log("Nível Prata ouro!");
} else if (nivel >= 9001 && nivel <= 10000) {
    console.log("Nível Ascendente");
} else if (nivel >= 10001 && nivel <= 10001) {
    console.log("Nível Radiante");
} 