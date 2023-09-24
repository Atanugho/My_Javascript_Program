
//object literal

// let emp = {
//     id:10,
//     name:'john',
//     salary:50000
// }
// console.log(emp)

//new intance object constructor

// const emp = new Object()
// emp.id = 20;
// emp.name = "peter"
// emp.salary = 30000;
// console.log(emp)

// function Emp (id,name,salary){
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
// }
// const employee1 = new Emp(40,"alex",40000)
// const employee2 = new Emp(30,"peter",30000)

// console.log(employee1)
// console.log(employee2)

//access
let emp = {
    id:40,
    name:"Alex",
    salary:40000
}
//dot notatation //squre bracket notation

// console.log(emp.id)
// console.log(emp["salary"])
// emp.city = "delhi"
// emp["country"]= "india"
// console.log("old object",emp)

// emp.name= "peter"
// emp.city = "mumbai"
// console.log("updated object",emp)

// delete emp.city
// delete emp["country"]

// console.log("updated object",emp)

//iterating

// for (const key in emp){
//     console.log(key)
//     console.log(emp[key])
// }
for (const key in emp){
       // console.log(key)
        console.log(key,emp[key])
}


