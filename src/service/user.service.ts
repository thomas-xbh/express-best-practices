import { BaseCrudProvider } from '../utils/crudProvider'
import UserModel, { UserDocument } from '../models/user.model'

const CRUD = BaseCrudProvider<UserDocument, Omit<UserDocument, 'createdAt'>>(UserModel)
console.log(CRUD,'CRUD');

export const getAllUsers = async () => {
    const res=await UserModel.find()
    console.log(res,'res');
    return res;
    
}


export default CRUD
