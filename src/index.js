import dotenv from "dotenv"
import connectDB from "./db";
import app from "app"
dotenv.config({
    path: './env'
}
)

connectDB()
.then(()=>{
    console.log("Inside then")
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is listining on port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB Connection Error!!", error);
})