const router=require ('express').Router()
const regc=require('../controllers/regcontroller')
const productc=require('../controllers/productcontroller')
const upload=require('../helpers/multer')



router.post('/register',regc.register)
router.post('/login',regc.login)
router.post('/forgot-password',regc.forgotpassword)

router.post('/addproduct',upload.multiple('images'),productc.addproduct)
router.get('/allproduct',productc.allproducts)

module.exports=router