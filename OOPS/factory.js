
function person(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log('Hello,my name is ' + this.name + ' and i am '+this.age + ' years old');
    }
}
let jhon = person("john",21)
let rahul = new person("rahul",22)

rahul.greet()

function createperson(name,age){
    return {
        name:name,
        age:age,
        greet :function(){
            console.log('Hello, my name is ' + this.name + ' and i am '+this.age + ' years old');
        }
    }
}
let jane = createperson("jane",21)
jane.greet()