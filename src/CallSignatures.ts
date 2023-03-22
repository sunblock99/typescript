// Call Signatures는 함수의 매개변수와 반환 타입을 지정해줌

type Add = (a:number, b:number) => number;

const add:Add = (a, b) => a + b;

