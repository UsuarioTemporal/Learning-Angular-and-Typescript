// Type aliases
// Un apodo o un alias para un tipo ya existente

type myNumber = number

let edad: myNumber
edad = 20

// esto es mucho mas util con intersection types o uniones de tipos

type numberOrString = number | string

let age: numberOrString

class User {
    name: string
    constructor() {
        this.name = ''
    }
}
class Admin {
    permissions: number
    constructor() {
        this.permissions = 0
    }
}

type UserAndAdmin = User & Admin

let user: UserAndAdmin = {} as UserAndAdmin

user.name = 'me la pela'
user.permissions = 2

console.table({ user })

// a los types alias tambien se puede 
// asignar la estructura de una funcion

type FuncString = (title: string) => string // forzando a la funcion que tiene 
// retornar una cadena

const fn = (callback: FuncString) => callback('string')

console.log(fn((param) => param))



// tuplas


let tupla: [string, number] = ['asd', 1]
// tupla.push(3,1)
tupla.push(2, 'asd')
// tupla = ['asd',0]
// tupla[0]='asdasd'
// tupla[1]=1
// tupla[2]='asd'

// enums 
// son como constantes , finales  globales
// variables que nunca cambiaran 
// const PE = 'peru' , N = 'NORTE' 
// const largo = 'L'
// const kilimetro = 'Km'

enum Stature {
    chica = 1,
    grande = 2
}

class Pedido {
    talla: number

    constructor() {
        this.talla = 0
    }
}

let pedido = new Pedido()
pedido.talla = Stature.chica