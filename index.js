let a= 10;
let b = 20;

function add(a,b){
    console.log(a+b);
}
add(10,20)
add(5,3)


let sum = function add(a,b){
    console.log(a+b);
}
console.log(sum(10,20))
//first class citizens

function x(callback){
    console.log('hello');
    callback()
}
function y(){
    console.log('bye');
}
x(y)
