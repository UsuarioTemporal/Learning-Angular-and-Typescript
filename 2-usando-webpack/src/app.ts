let message:string = 'EDteam_lat'
let arrMessages = [
    {
        content :'Hello'
    },
    {
        content : 'typescript'
    }
]

arrMessages.forEach(element => {
    console.log(element.content);
});

console.log(message);

// type:nombre es postfija
let students:number=8
students = 4

const sum =(a:number,b:number)=>{
    return a+b
}
console.log(sum(5,5))
let inscrito:boolean = true

message = inscrito? 'Welcome':'asdasd'

function mostrarEstadoInscripcioon(inscrito:boolean):void{
    message = inscrito? 'Welcome':'asdasd'
    console.log(message);
}
const mostrarEstadoIns =(inscrito:boolean):void=>{
    message = inscrito? 'Welcome':'asdasd'
    console.log(message);
}
let desconocido:undefined=undefined
let nulo:null = null

let cualquiera:any='asdasdasd'
cualquiera=86
cualquiera=false
cualquiera=undefined
cualquiera=null

const saludar=(nombre?:string):string=>{
    if(!nombre) nombre = 'Thom'
    return `Hello ${nombre}`
}
console.log(saludar('Carlos'))
console.log(saludar())

const sumatoria = (number_a:number,number_b:number):number=>{
    return number_a + number_b
}
const sumatoria_2 = (arr:number[]):number=>{
    return arr.reduce((a,b)=>a+b)
}
console.log(sumatoria_2([1,2,3]));

let apellidos:Array<string>
apellidos=['asdasd','asdasdad']

/**
 * tupla
 */
let pedido :[string,number,boolean]
pedido = ['pizza',14,true]

const sumatoria_3 = (...arr:number[]):number=>{
    return arr.reduce((a,b)=>a+b)
}
console.log(sumatoria_3(1,2));