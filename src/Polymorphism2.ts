function superPrint2<T>(a: T[]){
    return a[0];
}

superPrint([1,2,3,4])
superPrint([true, false, true])
superPrint(["a","b","c"])
superPrint([1,2, true,false])
superPrint([1,2, true,false,"a"])


type Player<E> =  {
    name:string
    extraInfo:E
}
type sunExtra = {
    favFood:"gogi"
}
type SunPlayer = Player<{favFood: sunExtra}>


const nico: Player<{favFood:string}> = {
    name:"nico",
    extraInfo: {
        favFood:"kimchi"
    }
}

function printAllNumbers(arr: Array<number>){
    
}