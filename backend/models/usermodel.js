import mongoose from "mongoose";
const {Schema} =  mongoose

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const userSchema = mongoose.Schema({
     name:{type:string,required:true},
     email:{type:string,required:true,unique:true},
     password:{type:string,required:true},
     creditBalance:{type:number,default:10}
},
{
     timestamps:true,
}
)

userSchema.methods.isPasswordCorrect = async function(password) {
     return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function (){
     return jwt.sign({
          _id:this._id,
          email:this.email,
          name:this.name,
     },
     {
          process.env.ACCESS_TOKEN_SECRET,
     }
)
}

const userModel = mongoose.models.user || mongoose.model("user",userSchema)

export default userModel;