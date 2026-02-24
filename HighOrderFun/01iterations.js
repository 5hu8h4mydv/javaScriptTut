const  arr = [1,2,3,4,5]

const myString = "Hello Dosto"

const myObj ={
    name:"Shubham",
    rollno:12,
    age:23
}


// for (const element of myObj) {                          //object is not iterable in for Of loop.
//     // console.log(element)
    
// }

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('UK',"United Kingdom")

for (const [keys,values] of map) {                          //object is not iterable in for Of loop.
    console.log(keys,values)
    
}