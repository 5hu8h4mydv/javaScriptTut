// Singleton
// Object literals

//Object.create //constructor method



const JsUser ={
    name:"Shubham",                  //name is considered as "name" by default
    age:18,
    "fullname":"Shubham yadav",     // cannot be accessed using .
    location:"PrayagRaj",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

console.log(JsUser.location)
console.log(JsUser["fullname"])