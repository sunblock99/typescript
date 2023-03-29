// type Nickname = string;
// type Health = number;
// type Friends = Array<string>

// type Player5 =  {
//     nickname:Nickname,
//     healyhBar:Health
// }

// const nico : Player5 = {
//     nickname:"sun",
//     healyhBar:10
// }

// type Food = string;

// const kimchi2:Food = "맛있어"


type Team = "read" | "blue" | "yellow";
type Health = 1 | 5 | 10

interface Player6 {
    nickname:string,
    team:Team
    health:Health
}

const sun: Player6 = {
    nickname:"sun",
    // 정해진대로 안써서 에러가뜸
    // team: "pink"
    team:"yellow",
    health:10
}


// 이런식으로 인터페이스를 상속받아 쓸수 있음
// interface User {
//     name:string
// }

// interface Player8 extends User{

// }

// const sunsun : Player6
//  = {
//     name:"sunblock"
//  }

interface User {   name:string }
    
     interface Player8 extends User{
    
     }
    
     const sunsun2 : Player6
      = {
         name:"sunblock2"
      }