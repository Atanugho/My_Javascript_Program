
function outerFunction(num){
    return function innerFunction(){
        console.log(num)
    }
}
outerFunction(10)()