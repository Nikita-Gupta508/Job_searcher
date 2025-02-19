import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        required:true
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String}, // URL to resume file
        resumeOriginalName:{type:String}, //Name.pdf
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, //know about company//rel bet company and user table
        profilePhoto:{
            type:String,
            default:""   // may be initially photo upload na kare
        }
    },
},{timestamps:true});
export const User = mongoose.model('User', userSchema);