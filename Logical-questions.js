console.log("Bismillah")

//find Max number in an array 
// const arrayMax = [1,2,3,4,5]
// const max = (arr) => {
//     let maxNumber = Math.max(...arr)
//     return (maxNumber)
// }
// console.log(max(arrayMax))


//find min number in an array
// const arrayMin = [1,2,3,4,5]
// const min = (arr) => {
//     let minNumber = Math.min(...arr)
//     return (minNumber)
// }
// console.log(min(arrayMin))

//find min & max values in an array using reduce method
// const arrayMinMax = [1,2,3,4,5];
// const minMax = (arr) => {
//     return arr.reduce(function(pre, cur){
//         return pre<cur ? pre : cur
//     })
// }
// console.log(minMax(arrayMinMax))

//find second largest number in an array
// const arraySecond = [1,2,3,4,5]
// const second = (arr) => {
//     let firstLargestNumber = Math.max(...arr)
//     let index = arr.indexOf(firstLargestNumber)
//     arr.splice(index,1)
//     let secondLargestNumber = Math.max(...arr)
//     return (secondLargestNumber)
// }
// console.log(second(arraySecond))

//Total a number of an array
// const arrayNumber = [1,2,3,4,5]
// const Total = (arr) => {
//     return arr.reduce(function(pre, cur) {
//         return pre+cur
//     })
// }
// console.log(Total(arrayNumber))

//what is the diffrence between filter and find
//filter
// const employes = [
//     {id: '1', name: 'Nizam', age: '20'},
//     {id: '2', name: 'Bujji', age: '15'},
//     {id: '3', name: 'Nagendra', age: '30'},
//     {id: '4', name: 'jaggu', age : '12'}
//     ]
// const adult = employes.filter((item) => {
//     return item.age>=18
// })
// console.log(adult)

// //find
// const findIt = employes.find((item) => {
//     return item.age>=18
// })
// console.log(findIt)


//find a factorial of a number
// const inputNum = prompt("Enter a number: ")
// let arrayEmpty = 1
// const findFactorial = (input) => {
//     if(input<=0){
//         return console.log(`Factorial of ${input} cannot be possible`)
//     }else{
//         for (let i=1; i<=input; i++){
//             arrayEmpty *= i
//         }
//     }
// }
// findFactorial(inputNum)
// console.log(arrayEmpty)

//find prime number for single number
// const inputPrime = prompt("Enter a number: ")
// if(inputPrime<2){
//     return console.log(`The Prime number will start from 2`)
// }else{
//     let isPrime = true
//     for (let i=2; i<=Math.sqrt(inputPrime); i++){
//         if(inputPrime%i === 0){
//             isPrime = false
//             break;
//         }
//     }
//     if(isPrime){
//         return console.log(`the given ${inputPrime} is a prime`)
//     }else{
//         return console.log(`the given ${inputPrime} is not a prime`)
//     }
// }
// console.log(storePrime)

//find prime number for multiple numbers
// const inputMulti = prompt("Enter a number: ")
// const emptyMulti = []
// if(inputMulti<=1){
//     return console.log(`The prime numbers will start from 2`)
// }else{
//     for(let i=3; i<inputMulti; i=i+2){
//         let isPrime = true;
//         for(let j=3; j<=Math.sqrt(i); j=j+2){
//             if(i%j===0){
//                 isPrime=false
//                 break;
//             }
//         }
//         if(isPrime){
//             emptyMulti.push(i)
//         }
//     }
// }
// console.log(emptyMulti)


//find prime number on more
// const inputTest = prompt("Enter a number: " )
// const Empty = []
// if(inputTest<=1){
//     console.log(`The prime numbers will start from 2`)
// }else{
//     for(let i= 2; i<inputTest; i ++){
//         let isPrime = true
//         for(let j=2; j<=Math.sqrt(i); j ++){
//             if(i%j===0){
//                 isPrime=false
//                 break;
//             }
//         }
//         if(isPrime){
//             Empty.push(i)
//         }
//     }
// }
// console.log(Empty)

//test
// const numInt = prompt("Enter a number: ")
// if(numInt<=1){
//     return console.log("The Prime Number will start from 2")
// }else{
//     let isPrime = true
//     for(i=2; i<Math.sqrt(numInt); i++){
//         if(numInt%i===0){
//             isPrime = false
//         }
//     }
//     if(isPrime){
//         return console.log(`The given ${numInt} is a prime`)
//     }else{
//         return console.log(`The given ${numInt} is not a prime`)
//     }
// }


//test2
// const numInput = prompt("Enter a number: ")
// const empty = []
// if(numInput<=1){
//     return console.log(`The Prime Number will start from 2`)
// }else{
//     for (i=2; i<numInput; i++){
//         let isPrime = true
//         for (j=2; j<=Math.sqrt(i); j++){
//             if(i%j==0){
//                 isPrime = false
//                 break;
//             }
//         }
//         if(isPrime){
//             empty.push(i)
//         }
//     }
// }
// console.log(empty)


//find a missing numbers in an array
// const arrayMissing = [1,2,4,5,7,8,10]
// const storeMissing = []
// const findMissing = (number) => {
//     let min = Math.min(...number)
//     let max = Math.max(...number)
//     for (let i=min; i<max; i++){
//         if(number.indexOf(i)<0){
//             storeMissing.push(i)
//         }
//     }
//     return (storeMissing)
// }
// findMissing((arrayMissing))
// console.log(storeMissing)

//find a vowels 
// let string = prompt("Enter any alphabet: ")
// string = string.toLowerCase()
// const findVowels = (str) => {
//     if(str=='a' || str=='e' || str=='i' || str=='o' || str=='u'){
//         return console.log(`The ${str} is a Vowel`)
//     }else{
//         return console.log(`The ${str} is not a Vowel`)
//     }
// }
// findVowels(string)

//find how many vowels is there in a name
// const inputVowel = prompt("Enter a name: ")
// let vowels = ['a', 'e', 'i', 'o', 'u']
// const findNameVowels = (name) => {
//     let count = 0
//     for (let letter of name.toLowerCase()){
//         if(vowels.includes(letter)){
//             count ++
//         }
//     }
//     return count
// }
// console.log(findNameVowels(inputVowel))


// const list = [-1,-2,-3,-4,-5]
// var a = -Infinity
// var b = -Infinity

// for (let i of list){
//     if ( i > a){
//         b = a
//         a = i
//     }else if (i > b && i < a){
//         b = i
//     }
// }
// console.log(b)


//reverse a string 
// const strReverse = "Nizam"
// const findReverse = (str) => {
//     const doIt = str.split("").reverse().join("")
//     return doIt
// }
// console.log(findReverse(strReverse))


//find a palendrome
// const inputNum = prompt("Enter someting: ")
// const findPalindrome = (str) => {
//     const reverseIt = str.split("").reverse().join("")
//     if(str===reverseIt){
//         return console.log(`This given string (${reverseIt}) is palindrome`)
//     }else{
//         return console.log(`This given string (${reverseIt}) is not palindrome`)
//     }
// }
// (findPalindrome(inputNum))



//swap a variable
// let a=10
// let b=20
// let swap=a
// a=b
// b=swap
// console.log(`The a is ${a} b is ${b}`)


//marge two arrays
// const arr1 = [1,5,2,4]
// const arr2 = [7,8,9,5]
// const spreadIt = [...arr1,...arr2]
// const sortIt = spreadIt.sort(function(pre, cur){
//     return pre-cur
// })
// console.log(sortIt)



//make a mini calculator 
// const selectOperator = prompt("Select operator (+, -, *, /): ")
// const input1 = parseFloat(prompt("Enter first number: "))
// const input2 = parseFloat(prompt("Enter second number: "))
// if(selectOperator == '+'){
//     result = input1 + input2
// }else if(selectOperator == '-'){
//     result = input1 - input2
// }else if(selectOperator == '*'){
//     result = input1 * input2
// }else{
//     result = input1 / input2
// }
// console.log(result)


//compare arrays
// const arr1 = [1,2,3,4]
// const arr2 = [1,2,3]
// const find = arr1.every((el) => arr2.includes(el) && arr2.every((el) => arr1.includes(el)))
// console.log(find)


//find intersection numbers
// const arr1 = [1,2,3,4,4,4]
// const arr2 = [1,2,3,4,5]
// const findIntersection = arr1.filter((el) => {
//     return arr2.includes(el)
// })
// console.log([...new Set(findIntersection)])


//find a union of two array
// const arr1 = [1,2,3,4,4,4]
// const arr2 = [1,2,3,4,5]
// const findUnion = [...arr1,...arr2]
// console.log([... new Set(findUnion)])


//convert the first letter of the string to upper case
// let string = "nizam"
// let converIt = string.charAt(0).toUpperCase() + string.slice(1)
// console.log(converIt)

//convert the first letter of the string to upper case
// const inputNum = prompt("Enter somthing: ")
// const firstletterCaps = (str) => {
//     const newStr = str.split(" ");
//     const newArr = newStr.map((value) => {
//         return value.charAt(0).toUpperCase() + value.slice(1)
//     })
//     return newArr.join(" ")
// }
// console.log(firstletterCaps(inputNum))



//fibonacci series
const inputNum = prompt("Enter a num: ")
const findFibo = (num) => {
    let a =0
    let b =1
    for (let i=0; i<num; i++){
        let total = a+b;
        a=b
        b=total
        console.log(total)
    }
}
findFibo(inputNum)



































































