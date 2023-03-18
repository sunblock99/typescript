// 별칭으로 만들수있음
type Name = string;
type Age = number;

type Player = {
    name : Name,
    age? : Age
}

// 방법1
// //                              : 리턴타입
// function playerMaker(name:Name) : Player{
//     return {
//         // return 값이름과 인자값 이름이 같으면 :인자명 생략가능 
//         name:name,
//     }
// } 

// 방법2
const playerMaker = (name:Name) : Player => ({name});



const sun = playerMaker("선형채");
sun.age = 24




// // typescript에서 age? 로 선언후 player.age를 해줌으로써 에러가 안나게 해줌
// if(sun.age && sun.age < 10){

// }