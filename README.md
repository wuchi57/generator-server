# 基于yeoman创建的项目模版

#### 项目技术栈包含：express、dotenv、body-parser

#### 使用方式
- 全局安装依赖: yarn install -g yo generator-server
- 查看yo已安装的项目模版：yo --generators
- 删除项目模版：npm uninstall generator-server -g
- 使用项目模版：mkdir test && cd test && yo server

初始化: 在根目录创建.env文件
````
SECRET_KEY =  'your secret key'
USERNAME   =  'your username'
PASSWORD   =  'your password'
````
运行 node app.js 



## Project template based on yeoman 
##### The project technology stack includes: express、dotenv、body-parser
#### How to use?
- Global install：npm install -g yo generator-server
- Check installed project templates：yo --generators
- Delete project template：npm uninstall generator-server -g
- Use project template：mkdir test && cd test && yo server
  
Init: create .env file in your root directory
````
SECRET_KEY =  'your secret key'
USERNAME   =  'your username'
PASSWORD   =  'your password'
````
run: node app.js
