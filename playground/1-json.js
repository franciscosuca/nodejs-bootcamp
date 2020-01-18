const fs = require('fs')

// // JS object
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }
// // JSON format
// const bookJSON = JSON.stringify(book)
// // JS Object
// const parseData = JSON.parse(bookJSON)

// // Saving object into a JSON file
// fs.writeFileSync('1-json.json',bookJSON)

// // Reading the file
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// Challange
// 1. Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
// 2. Change the name and age property
user.name = "Stanly"
user.age = 21
// 3. Srtingify the changed object and overwrite the original data
const userJSON = JSON.stringify(user) 
fs.writeFileSync('1-json.json',userJSON)
// 4. Verify the result
// console.log(userJSON)
console.log('Check the 1-json.json file.')
