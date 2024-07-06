import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import process from "node:process"

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected ${connectionInstance.connect.host}`)
    }catch(error){
        console.error("MongoDb connection error", error);
       process.exit(1)
    }
}

//console.log(process);

export default connectDB;