require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3040
const DATABASE_URL = process.env.DATABASE_URL
const dbConnect = require('./db/config.db')




//Database Url pass
dbConnect(DATABASE_URL)


app.get('/',(req,res)=>{
    try {
        res.status(200).json({
            message: "Success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})


app.listen(PORT,(err)=>{
    if(!err){
        console.log(`Server is running at http://localhost:${PORT}`)
    }
})