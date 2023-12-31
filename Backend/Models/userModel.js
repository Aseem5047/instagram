import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        emailMobile: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
        fullname: {
            type: String,
            required: true
        },
        isAdmin : {
            type: Boolean,
            default: false,
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksAt: String,
        relationship: String,
        country: String,
        followers: [] ,
        following: []
    },
    {timestamps: true}
)

const UserModel= mongoose.model("Users", UserSchema);
export default UserModel