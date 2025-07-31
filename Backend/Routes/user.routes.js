import express from 'express'
import { checkauth, login, signup, updateProfile } from '../Controllers/user.controller.js';
import { protectedRouter } from '../Middleware/auth.js';

const userRoute=express.Router();

userRoute.post("/signup",signup);
userRoute.post("/login",login);
userRoute.put("/update-profile",protectedRouter,updateProfile);
userRoute.get("/check",protectedRouter,checkauth);

export default userRoute;