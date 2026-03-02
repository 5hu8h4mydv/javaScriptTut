const user ={
    username:"Shubham",
    logginCount:88,
    isLoggedIn:true,

    getUserDetail:function(username,logginCount){

        // console.log("Got user Detail from database.")
        // console.log(`Username: ${this.username}`)

        // console.log(this)

        this.username=username
        this.logginCount=logginCount
        console.log(this.username)
        console.log(this.logginCount)
        return
    }
}

const userOne = user.getUserDetail("raghav",28)
console.log(userOne)
