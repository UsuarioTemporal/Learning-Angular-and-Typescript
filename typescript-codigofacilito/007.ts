// Genericos -- esto es más facil de entender si que tienes 
//           -- background en java 

const genericReceptor = <T>(obj:T):T=>{
    return obj
}
console.log(genericReceptor<string>('asd'))
console.log(genericReceptor<number>(1))

const printAll = <T>(arr:T[])=>{
    console.log(arr.length)
}

printAll<number>([1,2,3])
printAll<string>(['1','2','3'])

class Printer<T>{
    printAll(arr:T[]){
        console.log(arr.length)
    }
}
let printer:Printer<number> = new Printer()
printer.printAll([1,23,4])

interface Assets{
    x:number,y:number
}

const generic = <T extends Assets>(obj:T)=>{
    console.log(obj)
}
class Point{
    x:number
    y:number
    constructor(){
        this.x= this.y = 0
    }
}
generic<Point>(new Point())