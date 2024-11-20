// user.controller.ts

import { Request, Response } from 'express'
import { commonRes, silentHandle } from '../utils'

import USER_CRUD,{findPage} from '../service/user.service'

export async function getAllUsersHandler(req: Request, res: Response) {
  const [e, user] = await silentHandle(USER_CRUD.find)
  findPage()
  return e ? commonRes.error(res, null, e.message) : commonRes(res, user)
}
