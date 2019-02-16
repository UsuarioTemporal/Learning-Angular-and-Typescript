interface ICurso{
    nombre:string
    identificador:number
}

let miniCurso : ICurso;
miniCurso={
    nombre:'asdasd',
    identificador:2
}
interface ICursos{
    items:ICurso[]
}
let miniCursos: ICursos = {
    items:[
        {
            nombre:'asdas',
            identificador:1
        }
    ]
}