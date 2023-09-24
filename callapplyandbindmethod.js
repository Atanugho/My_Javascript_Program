// function printname(name){
//     console.log(`Hi ${name}`)
// }
// printname.city = "Delhi";
// printname("John")
// console.log(printname.city)

//metho of function object version
//they are used to control of this
//call ,//apply -> for function borrowing
// const user1 = {
//     name:"john",
//     greetings:function(){
//         console.log(`Hello,${this.name}`)
//     }
// }
// const user2 = {
//     name:"peter"
// }
// user1.greetings()
// user1.greetings.call(user2)
// user1.greetings.apply(user2)

//bind ->creates a new function with fixed this
// const person = {
//     name:"john",
//     sayHi:function(city,age){
//         console.log(`Hello, ${this.name} from ${city} of age ${age}`)
//     }
// }
// const anotherPerson = {
//     name:"peter"
// }
// const bound = (person.sayHi.bind(anotherPerson,'delhi',40))
// bound()
