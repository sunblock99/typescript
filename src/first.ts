// 별칭으로 만들수있음
type Name = string;
type Age = number;

type Player = {
    name : Name,
    age? : Age
}



const sun : Player = {
    name : "선형채"
}

const zzong : Player = {
    name:"쫑이",
    age:11
}




// typescript에서 age? 로 선언후 player.age를 해줌으로써 에러가 안나게 해줌
if(sun.age && sun.age < 10){

}