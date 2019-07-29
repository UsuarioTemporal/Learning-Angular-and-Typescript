class Speaker{
    hi(name:string){
        console.log(`hola ${name}`)
    }
}
let speake:Speaker = new Speaker()
console.log(speake.hi('Thom'))
console.log(speake.hi('carlos'))