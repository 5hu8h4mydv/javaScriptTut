//const tinderUser = new Object() //Sigleton Object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Raghav"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {

    email:"Raaghav@123.com",
    fullname:{
        fname:"Raghav",
        lname:"Kumar",
      },
      
}   //nested object

//console.log(regularUser.fullname.fname)

const Obj1 = {1:"a",2:"b"}
const Obj2 = {3:"c",4:"d"}
const Obj5 = {5:"e",6:"f"}
const Obj6 = {7:"j",8:"k"}

//or use spread operator {...Obj1,...Obj2,...Obj3,...Obj4}

//const Obj3 = {Obj1,Obj2}

//const Obj4 = Object.assign(Obj1,Obj2) //{} for adding more objects{{},obj1,obj2}

const Obj4 = Object.assign({},Obj1,Obj2,Obj5,Obj6)






console.log(Object.keys(tinderUser))

