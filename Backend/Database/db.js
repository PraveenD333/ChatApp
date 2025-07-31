import mongoose from "mongoose";

 function connectDB (){
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb Connected... ✅");
    } catch (error) {
        console.error("MongoDb Connected Failed... ❌",error);
        process.exit(1);
    }
 }

 export default connectDB