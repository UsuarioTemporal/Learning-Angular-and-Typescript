interface ICurso{
    nombre:string
    identificador?:number
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
const crearCurso = (curso:ICurso):ICurso=>{
    return {
        nombre:curso.nombre,
        identificador:curso.identificador
    }as ICurso
}

const nuevoCurso = crearCurso({
    nombre:'Javascript',
    identificador:1
})

interface CursoEDtema extends ICurso{
    costo:number
}