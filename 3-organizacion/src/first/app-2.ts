// alias en los tipos de datos

let cursoComprado :'Typescript' | 'Angular';
cursoComprado = 'Angular'
const comprarCurso = (curso :'Typescript' | 'Angular')=>{
    cursoComprado = curso
}
comprarCurso('Angular')
console.log(`Curso comprado ${cursoComprado}`);

type Curso = 'Typescript' | 'Angular'
let cursoComprado_2 : Curso;
const funcionComprarCurso = (curso:Curso)=>{
    
}