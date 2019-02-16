type HasName={
    firstName : string,
    lastName :string
}
type HasAddress = {
    address :string
}
type Player = HasName & HasAddress

const player:Player = {
    firstName:'Thom',
    lastName:'Roman',
    address:'Peru'
}
console.log(player)