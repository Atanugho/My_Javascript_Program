function ceratePromise(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function f(){
            console.log("timer done");
            resolve("done");
        },3000);
    });    
}
console.log("start");
let x = ceratePromise();
console.log("got a new promise");

x.then(function f(){
    console.log("promise done")
});
console.log("end");

for(let i=0;i<100000;i++){
    //some code
}