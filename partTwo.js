let arr = [2,3,4,5]

arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
})
arr.forEach((element,index,arr)=>{
    console.log("arrow:",index,element,arr)
})

const heros =["naagraj","doga","dhruva","maniraj"]

heros.forEach((el) => {
    console.log(el.toUpperCase())
})

arr.map(function(element,index,arr){
    console.log(element,index,arr)
})
heros.map((hero) => console.log(hero.toUpperCase()))

//filter
console.log(heros);
const herosWithRaj = heros.filter((hero) => {
   return  hero.endsWith("raj")
})
console.log(herosWithRaj)

//shopping cart

const cartBill = [20,30,50,60]
const sumOfCartBill = cartBill.reduce((prev,curr) => prev+curr,0)
console.log(sumOfCartBill);

const gameScore = [200,300,310,250,150]
//check if all value are number
const gameScoreCheek = gameScore.every((v) => typeof v === 'number')
console.log("check:",gameScoreCheek)

//find score above 200
const above200 = gameScore.find((score) => score>200)
console.log(above200);
