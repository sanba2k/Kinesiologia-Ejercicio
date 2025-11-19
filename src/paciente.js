class Paciente{
    constructor(edad, fortaleza, dolor, rutina=[]){
        this.edad = edad,
        this.fortaleza= fortaleza,
        this.dolor= dolor
        this.rutina=rutina
    }

    saberEdad(){
        return this.edad
    }

    nivelFortaleza(){
        return this.fortaleza
    }

    nivelDolor(){
        return this.dolor
    }

    disminuirDolor(valor){
        this.dolor = Math.max(0, this.dolor - valor)
    }

    aumentarFortaleza(valor){
       this.fortaleza += valor
    }

    puedeRealizarRutina(){
    return this.rutina.every( (a) => a.puedeUsarlo(this))      
    }

    hacerRutina(){
        const puedoUsar= this.rutina.filter((a)=> a.puedeUsarlo(this))
        puedoUsar.forEach((a)=> a.usar(this))
        
    }
}

module.exports = Paciente