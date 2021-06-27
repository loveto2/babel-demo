# 食用说明

## 主要例举如下几种情况

1. 没有任何`babel`转换配置  `yarn build`
2. 使用`@babel/preset-env`只做语法转换  `yarn build:1`
3. 使用`@babel/polyfill`做全局·全量引入(直接引入整个包，babel@7.4以后废弃)  `yarn build:2`
4. 使用`@babel/core-js regenerator-runtime/runtime`做全局·全量引入（直接引入这两个包，效果同@babel/polyfill）  `yarn build:3`
5. 使用`@babel/preset-env`做全局·全量引入（useBuiltIns设置为entry）  `yarn build:4`
6. 使用`@babel/preset-env`做全局·按需引入（useBuiltIns设置为usage）  `yarn build:5`
7. 使用`@babel/plugin-transform-runtime`做模块按需引入，使用core-js@2.x 不能polyfill实例方法  `yarn build:6`
8. 使用`@babel/plugin-transform-runtime`做模块按需引入，使用core-js@3.x 可以polyfill实例方法  `yarn build:7`

***注意：*** 使用`@babel/preset-env`需要指定浏览器版本 entry需要在人口文件引入core-js，全局polyfill在浏览器控制台可以输入Promise等打印出对应的函数，而模块polyfill不行，模块polyfill会引入对应的@babel/runtime、@babel/runtime-corejs2、@babel/runtime-corejs3未安装不会报错。 `@babel/polyfill @babel/core-js regenerator-runtime/runtime`是直接引入包，不需要配置babel（所谓的polyfill就是将具有polyfill能力的js文件或者包引入到项目中，配置babel去做应用级或者模块级别的polyfill只是为了能自动引入、并且减少引入的polyfill文件）
