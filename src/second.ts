const names : readonly string[] = ["1","2"];


// readonly : 읽기전용으로 만들어줌 
const player : readonly [string, number, boolean] = ["선형채", 24, false];
// 읽기전용상태라 에러가 뜸
player[0] = "hi"