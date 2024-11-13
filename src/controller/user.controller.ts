// user.controller.ts

import { Request, Response } from 'express'
import { commonRes, silentHandle } from '../utils'

import USER_CRUD, { getAllUsers } from '../service/user.service'

export async function getAllUsersHandler(req: Request, res: Response) {
  getAllUsers()
  const [e, user] = await silentHandle(USER_CRUD.find)
  console.log(e, user, '执行了')

  return e ? commonRes.error(res, null, e.message) : commonRes(res, user)
}
