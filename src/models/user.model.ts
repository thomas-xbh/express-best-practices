// user.model.ts

import mongoose from 'mongoose'
import config from 'config'

// 模板接口
export interface UserDocument extends mongoose.Document {
  fullname: string
  email: string
  avatar: string
  address: string
}

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  avatar: String,
  address: String,
},{ autoCreate: true, autoIndex: false })

const UserModel = mongoose.model('users', userSchema)

export default UserModel
