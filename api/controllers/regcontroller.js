const Reg=require('../models/reg')
 const bcrypt=require('bcrypt')
 const nodemailer=require('nodemailer')
exports.register=async(req,res)=>{
   // console.log(req.body)
    const {name,username,mobile,password}=req.body
    const convertedPassword=await bcrypt.hash(password,10) 
   // console.log(convertedPassword)
    const usercheck=await Reg.findOne({username:username})
   // console.log(usercheck)

   try{
    if(usercheck==null){
   const record= new Reg({name:name,username:username,mobile:mobile,password:convertedPassword})
   record.save()
   res.json({
    status:201,
    apiData:record,
    message:"Account Created"
   })
}else{
    res.json({
        status:400,
        message:"This email is already exist"
    })
}
   }catch(error){
        res.json({
            status:400,
            message:error.message
        })
   }
}

exports.login=async(req,res)=>{
    //console.log(req.body)
    const{username,password}=req.body
    try{
    const record=await Reg.findOne({username:username})
    if(record!==null){
        const passwordcheck=await bcrypt.compare(password,record.password)
       // console.log(passwordcheck)
       if(passwordcheck){
        res.json({
            status:200,
            apiData:record.username
        })
    }else{
        res.json({
            status:400,
            message:"wronng credentials"
        })
    }

    }else{
        res.json({
            status:400,
            message:"wronng credentials"
        })
    }
}catch(error){
    res.json({
        status:500,
        message:error.message
    })
}
            
 }

exports.forgotpassword=async(req,res)=>{
   // console.log(req.body)
   const {email}=req.body
   const record= await Reg.findOne({username:username})
  // console.log(record)
  if(record==null){
    res.json({
        status:400,
        message:"This Email is not resistered "
     })
  }
  else{


  }
}