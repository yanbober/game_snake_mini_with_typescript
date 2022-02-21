# game_snake_mini_with_typescript

一个基于纯 TypeScript + Webpack + Less 实现的迷你 web 版贪吃蛇小游戏。

<div><img src="https://github.com/yanbober/game_snake_mini_with_typescript/blob/main/images/photo.png" width="350"></div>

## 项目使用

请确保已安装 node 即 npm 相关基本环境。

### 安装依赖

项目根目录下执行如下命令：

```
npm i
```

### 编译打包运行

项目根目录下执行如下命令：

```
npm run pack
```

编译完成后，使用浏览器打开根目录下 dist 目录中的 index.html，然后按键盘上下左右键即可开始游戏。

### 开发调试运行

项目根目录下执行如下命令：

```
npm run dev
```
使用浏览器打开终端提示链接即可，修改代码后保存自动重新编译部署刷新浏览器。

## 项目依赖清单

### TypeScript

- typescript
- ts-loader

### webpack

- webpack
- webpack-cli
- webpack-dev-server
- html-webpack-plugin
- clean-webpack-plugin

### Babel

- core-js
- babel-loader
- @babel/core
- @babel/preset-env

### CSS & Less

- style-loader
- css-loader
- less
- less-loader
- postcss
- postcss-loader
- postcss-preset-env

## LICENSE

MIT License

Copyright (c) 2022 yanbo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
