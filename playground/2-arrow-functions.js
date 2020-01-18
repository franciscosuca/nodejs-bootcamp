// const square = function(x){
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(3))

// const event = {
//     name: 'Birthday Party',
//     printGuestList: function(){
//         console.log('Guest list for ' + this.name)
//     }
// }

// Arrow functions do not bind their "this" value
// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)
//     }
// }

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList(){
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            // Arrow functions bind the "this" value from the context created
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event. printGuestList()