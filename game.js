

var values = ["Dumbledore", 56, "Mago"]

function ataque(){
    
    console.log(`O Herói ${values[0]}, vai iniciar seu ataque!`)
    
    switch (values[2]){
        case "Mago":
            console.log("O mago atacou usando magia")
            break
        case "Guerreiro":
            console.log("O guerreiro atacou usando espada")
            break
        case "Monge":
            console.log("O Monge atacou usando artes marciais")
            break
        case "Ninja":
            console.log("O Ninja atacou usando shuriken")
            break
        default:
            console.log("Você ainda não configurou seu personagem, volte ao menu!")
            break
    }
}

var atacar = true

if(atacar === true){
    console.log("Iniciando ataque...\n")
    ataque()

}else{
    console.log("Sem batalhas no momento, retorne mais tarde.")
}