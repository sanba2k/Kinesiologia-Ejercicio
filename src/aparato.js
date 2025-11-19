class Magneto{

    puedeUsarlo(persona){
        return true
    }

    usar(persona){
        persona.disminuirDolor( persona.dolor * 0.1)
    }



}

class Bicicleta{
    puedeUsarlo(persona){
        return persona.saberEdad() > 8
    }

    usar(persona){
        persona.disminuirDolor(4)
        persona.aumentarFortaleza(3)
    }



}

class MiniTrap{
    puedeUsarlo(persona){
        return persona.nivelDolor() < 20
    }

    usar(persona){
        persona.aumentarFortaleza( persona.fortaleza * 0.1 )

}

}


module.exports= {Magneto, Bicicleta, MiniTrap}
