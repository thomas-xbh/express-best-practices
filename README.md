# express-template

```
express-best-practices
├─ .eslintrc.js  代码规范
├─ .git
├─ .gitignore
├─ .prettierrc.js 格式化规范
├─ constants 全局变量
│  └─ code.ts
├─ package-lock.json
├─ package.json
├─ README.md 项目介绍
├─ src
│  ├─ app.ts 
│  ├─ controller 控制层
│  │  └─ user.controller.ts
│  ├─ middleware 中间件
│  │  ├─ index.ts
│  │  ├─ responseHeader.ts
│  │  └─ validate.ts
│  ├─ models 模型-schema转化为model
│  │  └─ user.model.ts
│  ├─ routes
│  │  ├─ auth.ts
│  │  ├─ index.ts
│  │  └─ user.ts
│  ├─ schema 请求参数校验
│  │  └─ user.schema.ts
│  ├─ service 服务层
│  │  └─ user.service.ts
│  ├─ types ts类型定义
│  │  └─ index.d.ts
│  └─ utils 工具函数
│     ├─ commonRes.ts
│     ├─ crudProvider.ts
│     ├─ dbConnect.ts
│     ├─ index.ts
│     ├─ logger.ts
│     └─ silentHandle.ts
└─ yarn.lock

```