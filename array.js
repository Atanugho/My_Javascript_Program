//using squre bracket

let numbersarray =[10,20,30,40,50]
console.log(numbersarray)
console.log(Array.isArray(numbersarray))

//using array constructor

let fruits = new Array("apples","oranges","banana")
console.log(fruits)

//array literal syntax

let mixedArray = Array('apples',true,10,{name:"john"});
console.log(mixedArray)

let nums = [10,20,30,40]
console.log(nums)
delete nums[1]    //after deleteing array length is same
console.log(nums)

//iteration of array

let nums = [10,20,30,40]
for(let i=0;i<nums.length;i++){
    console.log(`at index ${i} value is ${nums[i]}`)
}

//for of loop
let nums = [10,20,30,40]
for(let num of nums){
    console.log(` value is ${num}`)

}
