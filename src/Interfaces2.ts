/**
 * implements

    implements을 사용하여 클래스가 특정 인터페이스를 충족하는지 확인할 수 있습니다.
    클래스를 올바르게 구현하지 못하면 오류가 발생합니다.
    implements 절은 클래스가 인터페이스 유형으로 처리될 수 있는지 확인하는 것입니다. 클래스의 유형이나 메서드는 전혀 변경하지 않습니다.
    또한 클래스는 여러 인터페이스를 구현할 수도 있습니다. 클래스 C는 A, B를 구현합니다.
 */

interface User{
    firstName:string,
    lastName:string
    sayHi(name:string):string
    fullName():string
}
interface Human{
    health:number

}
class Player10 implements User, Human{
    constructor(
      public  firstName:string,
      public  lastName:string,
      public health:number
    ){}
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    } 
    sayHi(name: string): string {
        return `Hello ${name} My name is ${this.fullName}`
    }
    
}

const makeUser(user: User): User{
    return {
        firstName:"sun",
        lastName:"las",
        fullName: () => "xx",
        sayHi: (name) => "string"
    }
}
