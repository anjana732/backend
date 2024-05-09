
//const express = require('express')
//const { default: mongoose } = require('mongoose')

import dotenv from 'dotenv'
import connectDB from './src/db/index.js'
//const app = express()

dotenv.config({
    path: './env'
})

connectDB();
//const port = 4000


/*

;( async() => { 
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR", error);
            throw error
        })
        app.listen(process.env.PORT, () =>{
            console.log(`Server started at ${port}`)
        })
    }catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})()

*/