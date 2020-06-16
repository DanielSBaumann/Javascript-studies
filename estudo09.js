class Animal {
    constructor(patas) {
        this.patas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = 4;
    }
}

let pug = new Cachorro(false);

function show(dog) {

    console.log(dog);

}

show(pug);


class Person {
    constructor(name) {
        this.name = name;
    }
}

class PersonF {
    constructor(name, cpf) {
        super(name);
        this.cpf = cpf;
    }
}

let citzen = new PersonF("Augusto", "123456789");

console.log(citzen);