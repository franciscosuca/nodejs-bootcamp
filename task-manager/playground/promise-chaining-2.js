// Documentation
// Remove by id: https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndRemove

require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('5e0987fe7b3a2f50f837440f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log('Number of incompleted tasks: ' + result)
// }).catch((error) => {
//     console.log(error)
// })

// 5e0987e83c6e4e574c3737f0

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments(completed)
    return count
}

deleteTaskAndCount("5e0987e83c6e4e574c3737f0", false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

