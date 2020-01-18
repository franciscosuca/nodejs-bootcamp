// Object
// const user = {
//     name: 'Luis',
//     age:15
// }

// console.log(user['name'])
// console.log(user.name)

// // Object constructor
// const users = function(name,age){
//     this.name = name,
//     this.age = age
// }

// const user1 = new users('Luis',15)
// const user2 = new users('Pedro',25)

// console.log('Usuarios: ' + user1.name + ", " +user2.name)

// Methods & Object constructor
const users = function (name,age){
    this.name = name,
    this.age = age
    // this.yearOfBirth = () => {
    //     return 2019 - this.age
    // }
    this.yearOfBirth = birthDate
}
const birthDate = function (){ return 2019-this.age}

const user1 = new users('Luis',15)

console.log(user1.name,user1.age,user1.yearOfBirth())