
// function add(a,b){
//     return a+b;
// }
// let result = add(10,20);
// console.log(result);


// let add =  (a,b) =>{
//     return a+b;
// }
// let add = (a,b)=>a+b;
// let result = add(10,20);
// console.log(result);


// function add(){
//     console.log(arguments);
// }
// let add1 = () => console.log(arguments)

// add(10,20,30,40,50)
// add1(10,20,30,40,50)

//binding of this
// const person = {
//     name:'john',
//     greet:function(){
//         console.log('greet',this)
//         console.log(`Hello, my name is ${this.name}`)
//     },
//     greettwo:() =>{
//         console.log('greettwo',this)
//         console.log(`Hello, my name is ${this.name}`)
//     }
// };
// person.greet()
// person.greettwo();

//use for new keyword

function RegularFunction(name){
    this.name = name;
}
const regularobj = new RegularFunction('john')
console.log(regularobj)

const ArrowFunction = (name) =>{
    this.name = name;
}
const arrowobj = new ArrowFunction('peter')
console.log(arrowobj)