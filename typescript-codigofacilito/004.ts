// Un decorador es un patron de programacion
// en el que tomamos algo(metodo,propiedad,atributo) y lo envolvemos
// para agregar funcionalidad adicional a aquello a algo que estamos
// envolviendo y retornarlo decorado


//decoradores de clase
const Decorador= (cls :Function)=>{
    console.log('soy un decorador')
    cls.prototype.className = cls.name
}

@Decorador
class Speaker{}

let speaker = new Speaker() as any // type assertions
console.log(speaker.className) 


const classDecorator = (cls:Function)=>{
    console.log(cls,' desde el decorador')
}
@classDecorator // el console.log se imprimira 
                // sin sin si quirea instanciar
class MyClass{
    constructor(){
        console.log('')
    }
}

let myclass = new MyClass()
console.log(myclass)


// decoradores de propiedad
// se diferencias de los de clase por que 
// envian dos argumentos a la funcion
//decorada en lugar de uno

const decorator = (clsPrototype :any,propertyName:string)=>{
    console.log('Soy un decorador en ejecucion')
    clsPrototype.className = clsPrototype.constructor.name
    console.log(propertyName)
}
const decoratorStatic = (cls:Function,propertyName:string)=>{
    console.log('soyt un decorador en ejecucion')
    cls.prototype.className = cls.name
    console.log(propertyName)
}
class SoyUnaClass{
    // @decorator numero:number
    @decoratorStatic static otroNumero :number // investigar mas 
}


let soyclase:SoyUnaClass = new SoyUnaClass() as any
console.log(soyclase.className)