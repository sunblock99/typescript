/*
📌접근 가능한 위치

구분　　　선언한 클래스 내　상속받은 클래스 내　인스턴스
private 　 　　　⭕　　　　　　　❌　　　　　❌
protected 　　　⭕　　　　　　　⭕　　　　　❌
public　　　　　⭕　　　　　　　⭕　　　　　⭕

*/


abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
    abstract getNickName():void
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player3 extends User{
    
}

const sunblock = new Player3("sun","block","횽챙");

sunblock.getFullName();