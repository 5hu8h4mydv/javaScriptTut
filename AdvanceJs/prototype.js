function multiplyByTwo(num){
     return num*2
}

multiplyByTwo.power =  2       // kya function bhi Ek Object h ?     qki . access toh object ke sath lagta h

// fuction bhi ek object h.


console.log(multiplyByTwo.power)
console.log(multiplyByTwo.prototype)

console.log(multiplyByTwo(4))

function createUser(username,score){
     this.username = username
     this.score = score

}

// function ek Object h iailiye hum isme functionility add kr skte h , prototype ka use krke.

createUser.prototype.increment = function(){
     this.score++                                       //jisne ne bhi bulaya h uska kaam kro (this Add krke)
}

createUser.prototype.printMe = function(){
     console.log(`score is ${this.score}`)                 // this ka matlab jis
}

const shubham = new createUser("shubham",51)
const raghav =  new createUser("raghav",33)


// MyArray.prototype.map()          ❌

// myArray.map() 👌

shubham.printMe()






