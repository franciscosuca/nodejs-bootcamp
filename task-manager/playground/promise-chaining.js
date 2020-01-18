// Documentation
// Model methods: https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndUpdate

require('../src/db/mongoose')
const User = require('../src/models/user')

// 5e099895a263c53600a390e8

// User.findByIdAndUpdate('5e099895a263c53600a390e8', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5e099895a263c53600a390e8', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})