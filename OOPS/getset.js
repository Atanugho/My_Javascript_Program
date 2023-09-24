class person{
    constructor(name,age){
        this.name = name;
        this._age = age
    }

    get age(){
        return this._age+5;
    }
    set age(value){
        if(value>0){
            this._age = value
        }
        else{
            console.log("invalid age");
        }
    }
}

const john = new person('john',25)

console.log(john._age)
console.log(john.age);


