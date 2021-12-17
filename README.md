# Ant Design Pro

这个项目是用[Ant Design Pro](https://pro.ant.design)初始化的。下面是如何使用的快速指南。
## Environment Prepare

推荐使用 tyarn 来进行包管理，可以极大地减少 install 的时间和失败的概率，并且完全兼容 npm。

如果喜欢使用 npm 而不是 yarn，可以使用 cnpm, 安装速度比 tyarn 更快，但是与 npm 不是完全兼容。

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro提供了一些有用的脚本，帮助快速启动和构建web项目，代码风格检查和测试。

' package.json '中提供的脚本。修改或添加额外的脚本是安全的:
### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

可以使用脚本自动修复一些lint错误:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## Create a new project

创建项目
```bash
# 使用 npm
npx create-umi 项目名称
# 使用 yarn
yarn create umi myapp
```

配置项选择
```bash
ant-design-pro
TypeScript or JavaScript
simple or complete
```

安装依赖
```bash
$ cd myapp && tyarn
// 或
$ cd myapp && npm install
```

开启Umi UI

```bash
// 打开开发模式下页面右下角的小气泡，方便添加区块和模版等pro资产
$ tyarn add @umijs/preset-ui -D
// 或
$ npm install --save-dev @umijs/preset-ui
```

启动

```bash
yarn start
```

