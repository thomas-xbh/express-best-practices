import { BaseCrudProvider } from '../utils/crudProvider'
import UserModel, { UserDocument } from '../models/user.model'

const CRUD = BaseCrudProvider<UserDocument, Omit<UserDocument, 'createdAt'>>(
  UserModel
)
export const findPage= async ()=>{
    console.log(UserModel.estimatedDocumentCount({}),'123');
    let count =await UserModel.estimatedDocumentCount({})
    let res=await UserModel.find().skip(0).limit(10)
    console.log(res,count,'res');
    
    
    return UserModel.estimatedDocumentCount()
}

export default CRUD
