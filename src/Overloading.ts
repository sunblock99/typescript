// 오버로딩은 여러 call signatures가 있는 함수

type Config = {
    path:string,
    state: object
}

type Push = {
   (path:string):void
   (config:Config):void

}
const push:Push = (config) => {
    if(typeof config === "string"){
        console.log(config)
    }else{
        console.log(config.path, config.state)
    }

}



type Add2 = {
    (a:number, b:number) : number
    (a:number, b:number, c:number) : number
}


// 파라메터를 옵션으로 쓸땐 ?를 넣어서 옵션값으로 설정하기 !
const add2:Add2 = (a,b,c?:number) => {
    if(c){
        return a + b + c;
    }
    return a + b;
}

add2(1, 2)
add2(1, 2, 3)
