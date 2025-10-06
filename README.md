iACG后端项目说明文档
一、项目结构
acg-community-backend
|-src--config
|  |-db.js
|---controllers
|  |-userController.js
|---models
|  |-Comment.js
|  |-Post.js
|  |-User.js
|---routes
|  |-user.js
|---app.js

注：node_modules是 Node.js 项目的依赖仓库，可以通过 package.json 和 package-lock.json文件精确地重新构建。

二、模块解析
1、config-db.js
连接数据库
2、controllers-userController.js
路由控制器，用于处理用户相关的 API 请求。
3、models（Comment.js、Post.js、User.js）
定义了数据模型，用于在数据库中创建和管理评论数据。
4、routes-user.js
路由定义文件，创建了一个专门处理用户相关请求的路由器。
5、app.js
后端服务器的入口文件，负责启动整个应用程序。
