// type SuperPrint = {
//     (arr: number[]):void
//     (arr: boolean[]):void
//     (arr: string[]):void
//     // 이것이 다형성
//     (arr: (number|boolean)[]):void
// }

type SuperPrint = {
    // 제네릭을 사용하면 알아서 타입 지정이됨
    <T>(arr: T[]):T
}

const superPrint: SuperPrint = (arr) => arr[0]


superPrint([1,2,3,4])
superPrint([true, false, true])
superPrint(["a","b","c"])
superPrint([1,2, true,false])
superPrint([1,2, true,false,"a"])
