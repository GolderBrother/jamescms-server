export default {
  // 服务监听端口
  port: parseInt(process.env.PORT, 10) || 3000,
  // 接口文档配置
  swagger: {
    title: 'jamescms api 文档',
    description: 'api/console开头的是管理后台接口；api/pc开头的是PC端的接口',
    version: '1.0.0',
    url: 'api-doc',
  },
  // jwt secret
  jwt: {
    secret: 'jamescms',
    expires: '2h',
  },
  // 数据库链接配置
  db: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123123123',
    database: 'jamescms',
    entityPrefix: 'james_',
    synchronize: true,
    logging: false,
    timezone: 'local',
    autoLoadEntities: true,
    maxQueryExecutionTime: 1500,
    connectorPackage: 'mysql2',
    migrations: ['migration/**.ts'],
    cli: {
      migrationsDir: 'migration',
    },
  },
  // redis
  redis: {
    host: 'localhost',
    port: 6379,
  },
  // ip查询地址
  ipUrl: 'https://qifu-api.baidubce.com/ip/geo/v1/district?ip=:ip',
  // 登录错误次数限制
  loginFailLimit: 5,
  // 登录错误次数限制时间, 单位秒
  loginFailDelay: 60,
};
