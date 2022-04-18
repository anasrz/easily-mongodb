const Schema = require('./schema')
async function get(id) {
if(!id) throw new Error('Please Provide Id For dATA GET')
const data = await Schema.findOne({
    ID : id,
})
if(data) {
    
    return data.value
}
if(!data) {
    
    return null;
}
}
module.exports = get