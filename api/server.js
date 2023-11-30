const mongoose=require('mongoose')
const express=require ('express')
const app=express()

app.use(express.json())
require('dotenv').config()
const apiRouter=require('./Routers/apirouter')

const session =require('express-session')

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)


app.use(express.static('public'))
app.use('/api',apiRouter)



app.listen(process.env.PORT,()=>{console.log(`SERVER IS ON PORT ${process.env.PORT}`)})