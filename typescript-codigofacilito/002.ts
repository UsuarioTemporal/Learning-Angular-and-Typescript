//un dato que quermos que funcione como un numero en ciertos contextos
//o un string en otros casos

//Union Types 
let age: number | string
age = 2
age = ''

let val: number | string | boolean | object

const printAge = (age: number | string): void => console.log(age)

//type guards
//solo necesita hacer una revision luego apartir de 
//todo eso lo comenzará a tratar como el tipo de dato que se mando
const isNumber = (obj: number | string): obj is number => {
    return typeof obj === 'number'
}

//este es nuestro guardian para el tipo string
const prueba = (o: number | string): o is string => {
    return typeof o === 'string'
}

const printTest = (ob: number | string): any => {
    if (prueba(ob)) { // aquí ponemos a prueba a nuestro guardian
        let arr: string[] = [...ob]
        return arr
    }
    return ob * 2
}

console.log(printTest(5))

// intersection types

class User {
    nam: string
    constructor(nam?: string) {
        this.nam = nam || ''
    }
}

class Admin {
    permissions: number
    constructor(permissions?: number) {
        this.permissions = permissions || 0
    }
}

let user: User & Admin = { nam: 'asd', permissions: 1 }

interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type A = IStudent & IWorker;

let x: A = { id: 'asd', age: 1, companyId: 'asd' }

// let x1: A = {} as A
// x1.age = 1


// type assertions
// no cambian el objeto solo cambia el tipo que el compilador me dio
// corrige el tipo que typecrypt habia asignado a un objeto 

let user_: User & Admin = new User() as User & Admin

interface AJAXSettings {
    url: string
}

let options = {} as AJAXSettings
options.url = 'http://thom.com'