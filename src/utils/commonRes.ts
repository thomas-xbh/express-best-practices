import { Response } from 'express'
import { Code, codeType, CodeMessage } from '../../constants/code'
import logger from './logger'

// todo 分页怎么处理

interface ResOption {
  type?: codeType
  status?: number
  message?: unknown
}

interface sendResInterface {
  code: number
  resultObject: {
    results: any
    pagination?: Object
  }
  status: 'success' | 'error'
  message?: unknown
}

// 默认成功响应
function commonRes(res: Response, data: unknown, options?: ResOption) {
  options = Object.assign({ type: Code[200] }, options || {}) // 默认success

  const { type, status, message } = options
  let resStatus = status

  if (resStatus === undefined) {
    // 根据状态设置状态码
    resStatus = type === Code[200] ? 200 : 409
  }

  // 响应参数
  const sendRes: sendResInterface = {
    code: Code[type as codeType],
    resultObject: {
      results: data
    },
    status: 'success',
  }
  // 响应描述
  message && (sendRes.message = message)

  return res.status(resStatus).send(sendRes)
}

// 错误响应
commonRes.error = function (
  res: Response,
  data: unknown,
  message?: unknown,
  status?: number
) {
  logger.error(message || CodeMessage['error'])
  this(res, data, {
    type: 'error',
    message: message || CodeMessage['error'],
    status: status || 409,
  })
}

// 无权限响应
commonRes.denied = function (res: Response, data: unknown) {
  this(res, data, {
    type: 'denied',
    message: CodeMessage['denied'],
    status: 401,
  })
}

export default commonRes
