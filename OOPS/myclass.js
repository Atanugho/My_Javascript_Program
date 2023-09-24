
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    organigation = 'tata'
    greet(){
        console.log(`Hello ,my name is ${this.name} and my age is ${this.age}`)
    }
}
// const rahul = new person('rahul',21);
// rahul.greet()
// console.log(rahul.organigation)

function newPerson(name,age){
    this.name = name
    this.age = age
}

newPerson.prototype.greet = function(){
    console.log(`Hello ,my name is ${this.name} and my age is ${this.age}`)
}

const rahul = new newPerson("rahul",21)
rahul.greet()


class animal{
    constructor(name){
        this.name
    }
}
class dog extends animal{
    constructor(name,breed){
        super (name)
        this.breed = breed
    }
}

