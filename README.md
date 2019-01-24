# react-boilerplate (simple)

自用的简洁版 `react` 的工程样板框架。内置 `react-router` 和最基本 `webpack` 配置。使用 `webpack` 从 0 构建，可以根据项目需求自行引入相关库。

## 安装

```shell
# Clone 本项目然后安装项目依赖即可
git clone git@github.com:Konata9/react-boilerplate.git

npm i
```

## 使用

```shell
# 运行开发模式，默认监听 2233 端口
npm run dev

# 模块打包，生成的打包文件在 `dist` 目录下
npm run build
```

## 文件目录

```
your project folder
|-- config // webpack 配置文件
|-- src // 代码文件夹
  |-- assets // 存放静态资源
  |-- components // React 组件（不与 redux 直接挂钩）
  |-- constants // 全局常量
  |-- containers // React 组件（与 redux 直接挂钩）
  |-- routes // react-router 目录
  |-- scss
  |-- utils // 全局方法
  |-- index.html // 模版 html
  |-- index.js // 入口 js 文件
|-- .babelrc
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- README.md
```

## Dependencies 列表

```json
  "devDependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.2.2",
    "@babel/preset-env": "^7.3.0",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "clean-webpack-plugin": "^1.0.1",
    "css-loader": "^2.1.0",
    "file-loader": "^3.0.1",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "url-loader": "^1.1.2",
    "webpack": "^4.29.0",
    "webpack-cli": "^3.2.1",
    "webpack-dev-server": "^3.1.14",
    "webpack-merge": "^4.2.1"
  },
  "dependencies": {
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-hot-loader": "^4.6.3",
    "react-router-dom": "^4.3.1"
  }
```
