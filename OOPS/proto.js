
function person(name,age){
    this.name = name
    this.age = age
}
person.prototype.greet = function(){
    console.log(console.log(`Hello ,my name is ${this.name} and my age is ${this.age}`));
}

let rahul = new person ("rahul",21)
rahul.greet()