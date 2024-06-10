<p align="center">
  <a href="//www.jamescms.com" target="blank"><img src="https://jamescms.com/logo.svg" width="100" alt="jamescms Logo" /></a>
</p>
<p align="center">jamescms v1.0.0 | jamescms-admin v1.0.0 ｜ jamescms-client v1.0.0</p>

<p align="center">一个基于[<a href="https://nestjs.com/" target="_blank">nestjs</a>+<a href="https://typeorm.io/" target="_blank">typeorm</a>]+[<a href="https://v2.cn.vuejs.org/" target="_blank">vue v2.x</a>+ElementUI 2.x]+[<a href="https://nuxt.com" target="_blank">nuxt v3.11</a>]的快速搭建web应用程序的开源框架。</p>

![预览](https://jamescms.com/admin.png)

## 简介

> 项目采用前后端分离，三个项目：后端服务、管理后台UI、PC前台UI。后端服务给管理后台、PC前台提供接口。如果想支持更多端点可以自行扩展。

- PC端采用nuxt 3.11、nuxtUI、tailwindcss。
- 管理后台采用Vue、Element UI。
- 后端采用NestJs、typeorm、Redis & Jwt。
- 权限认证使用Jwt。
- 支持加载动态权限菜单，多方式轻松权限控制。
- swagger文档支持
- 前后端代码分离，可单独部署。
- 支持docker compose部署

## 仓库

### github

- 后端服务 ：[jamescms-server](https://github.com/GolderBrother/jamescms-server)
- 管理后台UI ：[jamescms-admin](https://github.com/GolderBrother/jamescms-admin)
- PC ：[jamescms-client](https://github.com/GolderBrother/jamescms-client)

## 在线体验

PC前台：<https://demo.jamescms.com>

管理后台: <https://demo.jamescms.com/console-ui>

账号密码：jamescms/jamescms

## 内置功能

✅ 站点设置 ✅ 模型管理 ✅ 敏感词管理

✅ 栏目管理 ✅ 内容管理 ✅ 标签管理 ✅ 碎片管理 ✅ 附件单管理

✅ 管理员管理 ✅ 角色设置 ✅ 后台菜单 ✅ 字典管理 ✅ 操作日志

## 安装教程

> 本地需要安装nodejs, nvm, docker & docker-compose

### 后端服务 [jamescms-server]

> nodejs >= v20; 本地用的是v20.10.0。

1. 下载代码

- github：`$ git clone git@github.com:GolderBrother/jamescms-server.git`

1. 进入目录：`$ cd jamescms-server`
2. 安装依赖：`$ npm install`
3. 一键启动：`$ docker-compose up -d` 如果想一键启动，可以只下载后端服务代码
4. 访问文档：`http://localhost:3000/api-doc`
5. 访问后台：`http://localhost:8080/console`
6. PC：`http://localhost`

## 扩展端点API

首先需要拿到服务端代码`jamescms-server`，进入到`src/apis`目录，新建一个目录，比如微信小程序：`wx-mp`

接着在`wx-mp`目录创建模块，以及子模块。可以像`ConsoleModule`一样设置api前缀`consumer.apply(OperationLogMiddleware).forRoutes('api/wx-mp');`

最后在app.module模块import。

```ts
@Module({
  imports: [WxMpModule],
  ...
})
export class AppModule {}
```

## 参与贡献

1. Fork 本仓库
2. 新建 feature/issue_number 分支
3. 提交代码
4. 新建 Pull Request

## 特别鸣谢

感谢以下的项目,排名不分先后

- [NestJs](https://nestjs.com/)
- [Typeorm](https://typeorm.io/)
- [Vue](https://v2.cn.vuejs.org/)
- [Element UI](https://element.eleme.cn/#/zh-CN)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [JWT](https://jwt.io/)
- [Redis](https://redis.io/)

## License

[MIT](。/LICENSE)
