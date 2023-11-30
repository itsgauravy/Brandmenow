const mongoose= require ('mongoose')


  const regSchema=mongoose.Schema({
    name:String,
    username: String,
    mobile:Number,
    password:String,
    address:String
})


module.exports=mongoose.model('reg',regSchema)