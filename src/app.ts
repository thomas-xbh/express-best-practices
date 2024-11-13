import express from 'express'
import routes from './routes' // 路由
import logger from './utils/logger' // 日志
import config from 'config' // 配置
import initMiddleware from './middleware'
import dbConnect from './utils/dbConnect' // 连接数据库

const app = express()

// 挂载中间件
initMiddleware(app)

app.use(express.json())

const PORT = config.get('server.port')

// 启动
app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  await dbConnect()
  routes(app)
})
