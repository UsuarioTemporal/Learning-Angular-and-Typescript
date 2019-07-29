// decoradores de metodos
/**
 * las funciones que decoran un metodo reciben tres argumentos
 * 1 . El prototipo de la clase del metodo
 * 2 . el nombre del metodo
 * 3 . descriptor de propiedades
 */
function Auditable(clsPrototype:any,methodName:string,descriptor?:any){
    const originalFunction = clsPrototype[methodName]
    const decoratedFunction = ()=>{
        originalFunction()
        console.log(`La funcion ${methodName} fue ejecutada`)
    }
    descriptor.value = decoratedFunction
    return descriptor
}
class Speaker{
    @Auditable n(){
        console.log(20)
    }
}
let speaker:Speaker = new Speaker()
speaker.n()