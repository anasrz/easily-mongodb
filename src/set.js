const Schema = require('./schema')
async function set(id,value) {
   
    if(!id) throw new Error('Invalid Data Set !')
    if(!value) throw new Error('Invalid Value Data Set')
    const data = await Schema.findOne({
        ID: id
    }) 
    if (data) {
        await Schema.findOneAndRemove({
            ID: id
        }) 
              let newData = new Schema({
                ID: id,
                value : value
    })
    newData.save();
        } else if (!data) {
      
         let newData = new Schema({
            ID: id,
            value : value
    })
    
        newData.save(); 
         
       }
}
module.exports = set;