/*
//String to Number
let score = "22abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) 

console.log(typeof valueInNumber)
console.log(typeof(valueInNumber))

console.log(valueInNumber) //NaN => not a number
*/

/*
//null to Number
let score = null

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) 

console.log(typeof valueInNumber)
console.log(typeof(valueInNumber))

console.log(valueInNumber) //0
*/

/*
//undefined to Number
let score = undefined

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) 

console.log(typeof valueInNumber)
console.log(typeof(valueInNumber))

console.log(valueInNumber) // NaN
*/
/*
// boolean to Number
let score = true

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) 

console.log(typeof valueInNumber)
console.log(typeof(valueInNumber))

console.log(valueInNumber)  // 1
*/

// "33" => 33
// "33abc" => NaN  type => Number

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn) // 1 => true , 0 => false
// "" => false
// "Anand" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)