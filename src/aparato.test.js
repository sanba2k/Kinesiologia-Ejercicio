const Paciente= require("./paciente")
const {Magneto, Bicicleta, MiniTrap}= require("./aparato")

describe("Testeamos pacientes", ()=>{
    test("Testeamos la edad, nivel de dolor y fortaleza", ()=>{
        const p1= new Paciente(24,5,10)

        expect(p1.saberEdad()).toBe(24)
        expect(p1.nivelFortaleza()).toBe(5)
        expect(p1.nivelDolor()).toBe(10)
    })

    test("Puede Usarse", ()=>{
        const Leonardo= new Paciente(40, 10, 20)
        const Milena= new Paciente(3, 30, 50)

        expect(Leonardo.saberEdad()).toBe(40)
        expect(Leonardo.nivelFortaleza()).toBe(10)
        expect(Leonardo.nivelDolor()).toBe(20)
        expect(Milena.saberEdad()).toBe(3)
        expect(Milena.nivelFortaleza()).toBe(30)
        expect(Milena.nivelDolor()).toBe(50)
        
        const magneto= new Magneto()
        const bicicleta= new Bicicleta()
        const miniTrap= new MiniTrap()

        expect(magneto.puedeUsarlo(Leonardo)).toBe(true)
        expect(bicicleta.puedeUsarlo(Leonardo)).toBe(true)
        expect(miniTrap.puedeUsarlo(Leonardo)).toBe(true)
        
        expect(magneto.puedeUsarlo(Milena)).toBe(true)
        expect(bicicleta.puedeUsarlo(Milena)).toBe(false)
        expect(miniTrap.puedeUsarlo(Milena)).toBe(false)

    })

    test("Usamos Magneto", ()=> {
        const Leonardo= new Paciente(40, 20, 10)
        const Milena= new Paciente(3, 50, 30)
        const magneto= new Magneto()

        magneto.usar(Leonardo)
        magneto.usar(Milena)

        expect(Leonardo.nivelDolor()).toBe(9)
        expect(Milena.nivelDolor()).toBe(27)
    })

    test("Usamos Bicicleta", ()=>{
        const Leonardo= new Paciente(40, 20, 10)
        const bicicleta= new Bicicleta()

        bicicleta.usar(Leonardo)

        expect(Leonardo.nivelDolor()).toBe(6)
        expect(Leonardo.nivelFortaleza()).toBe(23)
    })

    test("Usamos MiniTrap", ()=>{
        const Leonardo= new Paciente(40, 20, 10)
        const miniTrap= new MiniTrap()

        miniTrap.usar(Leonardo)

        expect(Leonardo.nivelFortaleza()).toBe(22 )
    })

    test("Testeamos si puede hacer rutina", ()=>{
        const Milena= new Paciente(3,50,30)

        const rutina= new Rutina()

        expect(rutina.puedeUsarlo(Milena)).toBe(false)

    })


    test("Testeamos la Rutina completa", ()=>{
        const Leonardo= new Paciente(40,20,10)
        const rutina= new Rutina()

        rutina.hacerRutina(Leonardo)

        expect(Leonardo.nivelFortaleza()).toBe(30)


    })
})
