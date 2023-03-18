// typescript에서는 리턴타입을 정하지않으면 자동으로 void로 지정해줌
function hello(){
    console.log('x');
}

// never : 절대로 리턴을 하지않음 , 보통 프로그램 실행을 종료하거나 예외처리할떄 쓰임
function hello2():never{
    throw new Error("xx");
}