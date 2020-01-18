//Request module docs: https://www.npmjs.com/package/request

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if(!location){
    console.log('Please provide an address')
} else {
    geocode(location, (error, {latitude, longitude, location}) => {
        if (error){
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
    })    
}













// My solution to the callback chaining challenge
// const location = () => {
//     let name = []
//     process.argv.forEach(object => {
//         name.push(object)
//     })
//     if (name.length <= 2){
//         console.log('No name introduced')
//     } else {
//         const cname = name[2] + " " + name[3]
//         return cname
//     }
// }
// console.log(location())