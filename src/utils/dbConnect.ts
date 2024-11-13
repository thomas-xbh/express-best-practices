import mongoose from 'mongoose'
import config from 'config'
import logger from './logger'


// 连接数据库
async function dbConnect() {
  const url = config.get('database.url')
  const user = config.get('database.user')
  const password = config.get('database.password')
  const authSource = config.get('database.authSource')
  console.log(url,user,password,authSource);
  

  try {
    const connection = await mongoose.connect(url
      , {
      user: user,
      pass: password,
      authSource: authSource,
    }
  )

    logger.info('DB connected')

    return connection
  } catch (error) {
    logger.error('Could not connect to db')
    process.exit(1)
  }
}

export default dbConnect
