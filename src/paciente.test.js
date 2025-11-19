const Paciente=require("../src/paciente")
const {Magneto, Bicicleta, MiniTrap}=require("../src/aparato")
const { default: expect } = require("expect")

describe("Vamos a testear pacientes",()=>{

    test("Verifico que paciente pueda realizar rutina",()=>{
        const magneto= new Magneto()
        const bicicleta= new Bicicleta()
        const miniTrap= new MiniTrap()

        
        const Leonardo= new Paciente(40,20,10, [magneto,bicicleta,miniTrap,bicicleta])
        const Milena= new Paciente(3,50,30, [magneto, bicicleta])

        
        expect(Leonardo.puedeRealizarRutina()).toBe(true)
        expect(Milena.puedeRealizarRutina()).toBe(false)


    })

    test("Testeamos rutina", ()=>{
        const magneto= new Magneto()
        const bicicleta= new Bicicleta()
        const miniTrap= new MiniTrap()
        const Leonardo= new Paciente(40,20,10, [magneto,bicicleta,miniTrap,bicicleta])
        const Milena= new Paciente(3,50,30, [magneto, bicicleta])

        Leonardo.hacerRutina()
        Milena.hacerRutina()

        expect(Leonardo.nivelDolor()).toBe(1)
        expect(Leonardo.nivelFortaleza()).toBe(28.3)
        expect(Milena.nivelDolor()).toBe(27)
        expect(Milena.nivelFortaleza()).toBe(50)


    })



})