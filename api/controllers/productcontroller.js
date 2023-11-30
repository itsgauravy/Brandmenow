const Product=require('../models/product')




exports.addproduct=(req,res)=>{
   console.log(req.body)
  console.log(req.files) 
   const {name,desc,price,category,images}=req.body
try{
   const record= new Product({ name: name,desc: desc,image: images,price: price,categories: category })
   record.save()
   res.json({
    status:201,
    message:"Successfully added"
   })
   }catch(error){
        res.json({
            status:400,
            message:error.message
        })
   }
}


exports.allproducts=async(req,res)=>{
    try{
        const record=await Product.find()
        res.json({
            status:200,
            apiData:record
        })
    }catch(error){
        res.json({
            status:500,
            message:error.message
        })
       
    }
}