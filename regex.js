
//website ->regexr.com

let pattern = 'pw'

let regExOne = new RegExp(pattern)
let flag = 'gi'
let regExTwo = new RegExp(pattern,flag)

let regExthree = /pw/gi

const strToCheck  = "PW is growing at a rapid speed and recently they are working on pwskills to crete skills based Pwcontent"

const result = regExthree.test(strToCheck)
console.log(result)

const anotherResult = strToCheck.match(regExthree)
console.log(anotherResult)

const oneMoreResult = strToCheck.replace(regExthree,'p-w')
console.log(oneMoreResult)

const webUrl = "https://pwskills.com/atanu%20ghosh"

const useableUrl = webUrl.replace(/%\d\d/,'-')
console.log(useableUrl);

