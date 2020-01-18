const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET'){
//         res.send('GET request are disabled.')
//     }else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     if(req.method != null){
//         res.status(503).send('Server under maintenance!')
//     } else{
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,() => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5e22f7bc8e43ef1f6c306e97')
    // await task. populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5e22f32a9d87813cb8074c9d')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()