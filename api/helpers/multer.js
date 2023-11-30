
const multer=require ('multer')

const Storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../public/uploads');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

let upload=multer({
    storage:Storage,
    limits:{fileSize:1024*1024*10}
})

module.exports= upload