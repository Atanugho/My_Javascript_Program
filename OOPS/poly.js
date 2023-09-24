class animal{
    constructor(name){
        this.name = name
    }
    makesound(){
        console.log("some sound");
    }
}
class dog extends animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
    makesound(){
        console.log("woof woof");
    }   
}
class cat extends animal{
    constructor(name,color){
        super(name)
        this.color = color
    }
    makesound(){
        console.log("meow");
    }   
}
const generic = new animal ("gen")
const ted = new dog ("ted","gr")
const tom = new cat ("tom","white")

generic.makesound()
tom.makesound()
ted.makesound()