// console.log("S");
// console.log("H");
// console.log("U");
// console.log("B");
// console.log("H");
// console.log("A");
// console.log("M");

function meraNamBolo(){
console.log("S");
console.log("H");
console.log("U");
console.log("B");
console.log("H");
console.log("A");
console.log("M");
}
//meraNamBolo        (function reference)
//meraNamBolo()          //function exeuted

// function sumTwoNumbers(num1,num2){

// console.log(num1+num2)

// }

function sumTwoNumbers(num1,num2){

  const result = num1+num2
  return result

}
// const result =sumTwoNumbers(4,5)

// console.log(result)

function getUserName(username){
    if(!username){                                              //username===undefined
        console.log("Please Enter UserName")
        return
    }
    return `${username} just LoggedIn.`
}

// const message = getUserName()

// console.log(message)

function calculatePrice(...p1){                             //...p1    rest operator
    return p1
}

// console.log(calculatePrice(9,9,76,665,5))


const anyObject ={
    user:"Shubham",
    company:"Apni",
    price:"40B"
}

function getObject(objArg){
    return `username is ${objArg.user} and price is ${objArg.price} `
}
// console.log(getObject(anyObject))

const myArr =[1,2,3,44,56]

function getArray(arrArg){
    return arrArg
}

console.log(getArray(myArr))