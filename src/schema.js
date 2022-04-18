const mongoose = require('mongoose')
const db = mongoose.Schema({

    ID: {
    type: String,
    require: true
},
value: {
    type: String,
    require: true
},

  
})
const model = mongoose.model("easymongo", db)
module.exports = model;