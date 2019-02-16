interface PointInterface{
    x:number,
    y:number
}

type PonitType = {
    x:number,
    y:number
}

const fn =(args:PonitType)=> args.x+args.y

console.log(fn({
    x:10,
    y:15
}));