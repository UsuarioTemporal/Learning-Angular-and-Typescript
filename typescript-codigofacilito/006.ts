const Auditable = (message:string)=> {
    return (clsProto:any,methodName:string,descriptor?:any)=>{
        const originalFunction = clsProto[methodName]
        const decoratedFunction = ()=>{
            originalFunction()
            console.log(message)
        }
        descriptor.value = decoratedFunction
        return descriptor
    }
}

class Speaker{
    @Auditable('oldN está obsoleto, hay que usar n')
    oldN(){
        console.log(20)
    }

    @Auditable('n fue ejecutable')
    n(){
        console.log(20)
    }
}
let speaker:Speaker = new Speaker()

speaker.n()
speaker.n()
speaker.oldN()


