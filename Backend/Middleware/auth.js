import jwt from 'jsonwebtoken'
import User from '../Models/user.model.js';

export const protectedRouter=async(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(401).json({success:false,message: "No Token Provided"})
        }

        const decoded=jwt.verify(token, process.env.JWT_SECRET)

        const user=await User.findById(decoded._id).select("-password");

        if(!user){
            return res.json({success:false,message:"user not found"});
        }
        req.user=user;
        next()
        
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message: error.message})
    }

}