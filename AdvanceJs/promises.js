// // creating promises 

// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("promise is created")
        

//     },2000)

//     resolve()
// })


// promiseOne.then(function(){
//     console.log("promises is resolved")
// })

const promiseTwo = new Promise(function(res,rej){
    setTimeout(function(){
        console.log("Promise Two")
    },2000)
    res({"user":"Shubham","email":"Shubham@123"})
})

promiseTwo.then(function(user){
    console.log(user)
})

    