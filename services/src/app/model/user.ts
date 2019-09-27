export interface User{
    results:UserBase[]
}
export interface UserBase {
    gender:string,
    name:Name,
    email:string,
    picture:Picture
}
interface Name{
    title:string,
        first:string,
        last:string
}
interface Picture{
    arge:string,
    medium:string,
    thumbnail:string
}