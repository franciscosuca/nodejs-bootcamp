// Documentation
// Mongoose: https://mongoosejs.com/docs/validation.html
// Model methods: https://mongoosejs.com/docs/api/model.html#model_Model.findById

// const mongoose = require('mongoose')

const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Task