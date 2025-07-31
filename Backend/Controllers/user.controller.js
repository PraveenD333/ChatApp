import User from "../Models/user.model.js";
import cloudinary from '../Lib/cloudinary.js'


export const signup = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        if (!fullName || !email || !password || !bio) {
            return res.json({ success: false, message: "Missing Details" })
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.json({ success: false, message: "Acount Already Exists" })
        }

        const hPassword = await User.hashPassword(password);

        const newUser = await User.create({
            fullName,
            email,
            password: hPassword,
            bio
        });


        const token = newUser.generateAuthToken();
        res.status(201).json({ success: true, token,newUser, message: "Account Created Successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false, message: error.message });

    }
}

export const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.json({ success: false, message: "Missing Details" })
        }
        const user = await User.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Acount Doesn't Exists" })
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = user.generateAuthToken();
        res.status(200).json({ success:true, token, user, message: "Login Successfully" })

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false, message: error.message });
    }

}

export const checkauth = async (req, res) => {
    res.json({ success: true, user: req.user });
}

export const updateProfile = async (req, res) => {
    try {

        const { profilePic, bio, fullName } = req.body;

        const userId = req.user._id;
        let updatedUser;

        if (!profilePic) {
            updatedUser = await User.findByIdAndUpdate(userId, { bio, fullName }, { new: true });
        } else {
            const upload = await cloudinary.uploader.upload(profilePic);

            updatedUser = await User.findByIdAndUpdate(userId,
                { profilePic: upload.secure_url, bio, fullName }, { new: true });
        }
        res.json({ success: true, user: updatedUser })

    } catch (error) {
        console.log("Error In Updating ProfilePic",error);
        res.json({ success: false, message: error.message })
    }
}