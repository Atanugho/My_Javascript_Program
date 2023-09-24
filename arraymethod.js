
//add remove items from end of the array

//let num = [10,20,30,40]
//push and pop
// num.push(50)
// num.pop()
// console.log(num)

//beginning of the array

// let num = [10,20,30,40]
// //shift and unshift
// num.unshift(50)
// num.unshift(70)
// num.shift()
// console.log(num)

//let num = ["I","LOVE","JAVASCRIPT"]

//slice ->for deleting
//synxtax arr.slice(startIndex,endIndex) not including endIndex
// num.slice(1,3)
// console.log(num.slice(1,3))
// console.log(num)

// let arr =['t','e','s','t']
// console.log(arr.slice(-2))

// let nums = [10,20,30,40]
// let copyNums = nums.slice()
// nums[0] = 100
// console.log(copyNums)
// console.log(nums)

//splice method ->add,delete,replace
//syntax ->arr.splice(stratIndex,deletecount,argument1,argument2....argumentN)

// let arr = ["I","study","programing"];
// arr.splice(1,1)
// arr.splice(1,2)
// console.log(arr)

// let arr =["I","STUDY","PROGRAMING","RIGHT","NOW"]
// let removedElement = arr.splice(0,3,"listen","music")
// console.log(removedElement)
// console.log(arr)

// let arr =["I","STUDY","PROGRAMING"]
// arr.splice(2,0,"complex","skill")
// console.log(arr)


// let arr = [1,2,5]
// arr.splice(-1,0,3,4)
// console.log(arr)

//concat
// let arr = [10,20]
// console.log(arr.concat([3,4]))
// console.log(arr.concat([3,4],[5,7]))

//iterating
// [10,20,30].forEach(function(item,index,array){
//     console.log(`${item} is at index ${index} in ${array}`)
// })

//serching in array
// let arr = [1,0,false]
// console.log(arr.indexOf(0))
// console.log(arr.indexOf(false))
// console.log(arr.indexOf(null))
// console.log(arr.includes(null))

// let users = [
//     {id:1,name:"raj"},
//     {id:2,name:"peter"},
//     {id:3,name:"atanu"},
// ]
// let user = users.find(function(item){
//         console.log(item)
// })

// let nums = [10,20,30,40,50]
// nums.reverse()
// console.log(nums)

//split and join

// let names = 'john,peter,atanu'
// let arr = names.split(',')
// console.log(arr)


