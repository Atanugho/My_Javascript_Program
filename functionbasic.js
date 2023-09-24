
// function greet(name){
//     console.log(`Hello ${name}!`)
// }
// greet("john");
// greet("peter");
// greet();


// function greet(name ='guest'){
//     console.log(`Hello ${name}!`)
// }
// greet("john");
// greet("peter");
// greet();

// function calculateSum(num1,num2){
//     return num1+num2;
// }
// console.log(calculateSum(10,20));

// function greeting({city,name}){
//     console.log(`hello ${name} from city ${city}`)
// }
// greeting({name:"john",city:"delhi"})


function sumWithArgument(){
    //console.log(arguments)

    const argsArray = Array.from(arguments)
    console.log(argsArray)

    let sum =argsArray.reduce(function(acc,curr){
        return acc+curr
    },0)
    return sum
}

console.log(sumWithArgument(1,2,3))
console.log(sumWithArgument(1,2,3,4,5))