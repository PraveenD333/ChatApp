import { model, Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true, },
    password: { type: String, required: true, minlength: 6 },
    profilePic: { type: String, default: "" },
    bio: { type: String }
}, { timestamps: true })


// Methods

// Generate JWT token
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn:'1h'});
    return token;
}

// Hash password
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}
// Compare password
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}


const User = model("User",userSchema)

export default User;
