// CRUD create, read, update, and delete
// Driver API documentation: http://mongodb.github.io/node-mongodb-native/3.2/api/index.html

const {MongoClient, ObjectID} = require ('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    // db.collection('tasks').insertOne({
    //     _id: id,
    //     description: 'Start udemy course again.',
    //     completed: true
    // }).then((result) => {
    //     console.log(result.ops)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').findOne({
    //     completed: true
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // To fetch more than one result from the DB the use of the cursor is essential.
    // http://mongodb.github.io/node-mongodb-native/3.2/api/Cursor.html
    // toArray is the cursor method use to return an array of documents.
    // http://mongodb.github.io/node-mongodb-native/3.2/api/Cursor.html#toArray
    db.collection('tasks').find({
        completed: true
    }).toArray((error, result) => {
        console.log(result)
    })

    // db.collection('tasks').deleteMany({
    //     description: 'Clean the house'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("tasks").deleteOne({
    //     description: "Study data mining"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})

