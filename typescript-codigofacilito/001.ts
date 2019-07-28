const message: string = 'hello world';
const age: number = 2

console.log(age)
console.log(message);

const fn = (a: string): string => {
    return `${a} hola`
}
console.log(fn('chavo'))

function melapela(name: string, age: number): object {
    return {
        person: {
            name,
            age
        }
    }
}
function mela(): void {

}
const funct = (hola: string): string => hola

let counter: number = 0

const arrNumbers: number[] = [1, 2, 3, 4, 5]

arrNumbers.forEach(number => ++counter)

let data: any = ['asdasd'] // no recomendable en typescript 

console.log(counter)
let anyArr: any[] = []

//argumentos opcionales
const demoOpcional = (name?: string): string => (
    name ? name : 'otro'
)
console.log(demoOpcional('chavo'))

//palabra never se utilizara para funciones que nunca terminarar su proceso
const sf = (): never => {
    throw new Error('asd')
}

//https://www.tutorialsteacher.com/typescript/typescript-never


// objetos

class Video {
    constructor(private name: string) {
        this.name = name
    }
    get getName(): string {
        return this.name
    }
}

const miVideo = new Video('thom')
console.log({
    miVideo
})
console.log(miVideo.getName)
// console.log(miVideo.name)
class soyUnaClase {
    private static s: soyUnaClase
    private constructor() { }
    public static obetnerInstacia(): soyUnaClase {
        if (!this.s)
            this.s = new soyUnaClase()

        return this.s
    }
}

let s = soyUnaClase.obetnerInstacia()
console.log({ s })


class Animal {
    constructor(private name: string) {
        this.name = name
    }
    get getName() {
        return this.name
    }


}
class Per extends Animal {
    constructor(name: string) {
        super(name)
    }
    get getName() {
        return super.getName + ` sdasdasd `
    }
}
let p: Per = new Per('thom-123')

console.log(p.getName)

// interfaces
interface Asset {
    height: number
    getCoords(): string
}
class Hero implements Asset {
    height: number
    constructor(height: number) {
        this.height = height
    }
    getCoords(): string {
        return ''
    }
}
const check = (object1: Asset): Asset => {
    return object1
}
console.log(check(new Hero(1)))

//namespace
/**
* son un concepto que nos permite agrupar identificadores de un mismo
* nombre 
* 
* Evitar colisiones
*/

namespace CF {
    export class Youtube { }
    export const url: string = 'http://codigofacilito.com'
}

let video: CF.Youtube = new CF.Youtube()