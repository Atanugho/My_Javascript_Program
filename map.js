
let map = new Map()

map.set("1","stringvalue")
map.set(1,"numbervalue")
map.set(true,"booleanvalue")
console.log(map.get(1))
console.log(map.get("1"))
console.log(map)

// let user = {
//     name:"john"
// }
// let visitsMap = new Map()
// visitsMap.set(user,100)
// console.log(visitsMap)

// let map = new Map()
// map.set("1","strvalue")
// .set(1,"numvalue")
// console.log(map)    

// let items = new Map(
//     [
//         ['tomatos',100],
//         ['onions',200],
//         ['potatos',500]
//     ]
// )
// console.log(items.keys())

// for(let item of items.keys()){
//     console.log(item)
// }

// console.log(items.values())

// for(let item of items.values()){
//     console.log(item)
// }

// items.forEach((value,key,map) =>{
//     console.log(`${key}: ${value}`)
// })

// let user = {
//     name:"john",
//     age:20
// }
// //console.log(Object.entries(user))
// let map = new Map(Object.entries(user))
// console.log(map)

let items = new Map(
        [
            ['tomatos',100],
            ['onions',200],
            ['potatos',500]
        ]
)
//console.log(items.entries())
let obj = Object.fromEntries(items.entries())
console.log(obj)
