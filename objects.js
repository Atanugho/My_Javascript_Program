

// var emp = {
//     name:"john",
//     age:30,
//     salary:50000
// } 

// let keys = Object.keys(emp).forEach((key) =>console.log(key))
//method chaining
//console.log(keys)

//console.log(Object.values(emp))

// const keyValuePairs = Object.entries(emp)
// console.log(keyValuePairs)

//manipulates
// let convertToObject = Object.fromEntries(keyValuePairs)
// console.log(convertToObject)

// var emp = {
//     name:"john",
//     age:30,
//     salary:50000
// } 

// const newobject = Object.assign({},emp)
// console.log(newobject)

// var emp = {
//         name:"john",
//         age:30,
//         salary:50000
// } 
// Object.freeze(emp);
// emp.name ="peter"
// console.log(emp)

// console.log(Object.isFrozen(emp))

// var emp = {
//     name:"john",
//     age:30,
//     salary:50000
// } 
// emp.department ='IT';
// Object.seal(emp);

// emp.id = 100;
// emp.name = 'peter'
// console.log(emp)
// console.log (Object.isSealed(emp))

// let user1 = {name:"alex"}
// let user2 = Object.create(user1)
// user2.age = 40;

//let Obj = Object.create(null)
// console.log(user1)
// console.log(user2)

// var emp = {
//         name:"john",
//         age:30,
//         salary:50000
// } 
//console.log(Object.hasOwn(emp,'name'))
// console.log(Object.getOwnPropertyNames(emp))

// let descriptor = (Object.getOwnPropertyDescriptors(emp,'name'))
// console.log(descriptor)

// var emp = {

// }
// Object.defineProperty(emp,'name',{
//     value:'john',
//     writable:false
// })
// console.log(emp.name)

// const data = {}
// Object.defineProperties(data,{
//     username:{
//         value:'peter',
//         writable:true    
//     },
//     email:{
//         value:"john@gmail.com",
//         writable:'true'
//     }
// })

const data = {}
Object.defineProperties(data,{
    username:{
        value:'peter',
        enumerable:true 
    },
    email:{
        value:"john@gmail.com",
        enumerable:'true'
    },
    phone:{
        value:"8975462345",
        enumerable:false
    }
})
for(const key in data){
    console.log(`${key}: ${data[key]}`)
}