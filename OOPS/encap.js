
function person(name,age){
    this.name = name
    let _age = age
    this.greet = function(){
        console.log('Hello, my name is ' + this.name + ' and i am '+_age + ' years old');
    }
    this.getage = function(){
        return _age
    }
    this.setage = function(){
        if(age>0){
            _age = age
        }
        else{
            console.log("invalid age")
        }
    }
}
let john = new person("john",21)
console.log(john.getage())