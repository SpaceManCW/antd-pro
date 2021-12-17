## 侧边栏设置
- 侧边栏内容由路由决定，可在config->routes.ts中进行配置。  
- 创建新页面使用页面右下角的工具气泡创建  
- 图标的设置只需要输入图标的名字即可，对应ant design  
- 菜单可设置权限进行隐藏，权限是在登录的时候就进行设置

## 数据请求到页面渲染全过程Dva
- 组件使用数据
- 数据请求存放在service内，发起请求会请求到mock里的数据
- 页面数据需要构建模型

## model
- state 状态，其实就是要获取的数据
- 状态变更要用到effects的函数，每个状态对应一个自己的副作用函数
- effects内是generator函数。model内引入了service内请求数据的函数
- call可以执行这个函数使用yield等待请求拿到数据。call的第二个参数是要传给函数的参数
- yield使用put方法将获取到的数据传给reducers内的函数进行处理
- reducer最终会修改state
- 组件中通过connect拿到model的数据。组件可以在props内取到

## 创建新页面
- 在pages内新建一个文件夹，写一个页面，不要忘记导出
- 在routes.ts内进行配置，名字、图标、路径、对应的组件等

## mock
- 启动的时候start: no-mock 就可以不使用mock的数据

## services写请求
- 在service文件夹新建文件。从umi导入request
- export一个async方法。
