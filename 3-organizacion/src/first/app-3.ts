type CursoED = 'Angular' | 'typescript'

type Curso_={
    nombre:string,
    id:number
}
const cursoA:Curso_ ={
    nombre:'Angular',
    id:1
}

let cadenaCurso:string = `
{
    "nombre":"Tupe",
    "id":1
}
`;

const getIDCurso = (cur:string):number=>{
    return JSON.parse(cur).id;
}
console.log(getIDCurso(cadenaCurso));