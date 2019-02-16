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
    "nombre":"TypeScript",
    "id":1
}
`;

const getIDCurso = (cur:string):number=>{
    return JSON.parse(cur).id;
}

const getIdCurso_1 = (cur:string):number=>{
    const obj = JSON.parse(cur)
    return (obj as Curso_).id;
}

const getIdCurso_2 = (cur:string):number=>{
    const obj = JSON.parse(cur)
    return (<Curso_>obj).id
}
console.log(getIDCurso(cadenaCurso));
console.log(getIdCurso_1(cadenaCurso));
console.log(getIdCurso_2(cadenaCurso));