type Words = {
    [key: string]: string
}

class Dick {
    private words:Words
    constructor(){

    }
    add(word: Word){

    }
    def(term:string){

    }
    static hello(){
        return "hello"
    }
}

class Word {
    constructor(
        public readonly term: string,
        public readonly def: string
    ){}
}

const kimchi = new Word("kimchi", "한국의 음식");


// 읽기전용으로 만들어 수정 못하게 보호함
kimchi.def = "xxx"

const dick = new Dick();

dick.add(kimchi);
dick.def("kimchi");

Dick.hello();