const mongoose = require('mongoose')
function connect(link) {
    var me  = this;
    if(!link) throw new Error('Please Provide Link For Client')
    mongoose.connect(link, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 }).then(() => {

 }).catch((err) => {
throw new Error(err)
 })

}

module.exports = connect;