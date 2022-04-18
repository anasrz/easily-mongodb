const Schema = require('./schema')
async function all() {
const briven = {}
const aa = await Schema.findOne(briven)
return aa;
}
module.exports = all;