---
title: 聊聊前端模块化
date: "2019-02-22"
description: 前端现在是黎明前的黑暗，在几年内一定会明晰起来
---

> 前端现在是黎明前的黑暗，在几年内一定会明晰起来

## 前言

随着前端代码日益膨胀，JSer 开始需要通过模块化规范去管理代码。

由于在 ES6 之前并没有规范化的模块化机制，所以社区也是不断涌现出各种解决方案，比如文件拆分、全局变量、命名空间，以及 [YUI3](https://github.com/seajs/seajs/issues/547) 式的模块化开发方式。

后来 **CommonJS** 登上了舞台，一举取代了之前各种模块化方式的地位，至于原因我想这篇[文章](https://github.com/seajs/seajs/issues/547)讲解的非常清晰了。

## CommonJS

[CommonJS](http://wiki.commonjs.org/wiki/CommonJS) 原来叫 **ServerJS**，推出了 [Modules/1.0](http://wiki.commonjs.org/wiki/Modules) 规范并在 `Node.js` 下获得了成功，在这之后 **ServerJS** 将希望成果运用到浏览器端，于是社区改名为 **CommonJS**，同时激烈讨论 Modules 的下一版规范，分歧就此产生，逐步形成了三大流派：
1. **Modules/1.x** 这个流派认为 1.X 规范已经够用，只要移植到浏览器端就好。要做的是新增 [Modules/Transport](http://wiki.commonjs.org/wiki/Modules/Transport) 规范，即在浏览器上运行前，先通过转换工具将模块转换为符合 **Transport** 规范的代码。主流代表是服务端的开发人员。
2. **Modules/Async** 这个观点觉得浏览器有自身的特征，不应该直接用 **Modules/1.x** 规范。这个观点下的典型代表是 AMD 规范及其实现 [RequireJS](https://requirejs.org/)。
3. **Modules/2.0** 这个观点觉得浏览器有自身的特征，不应该直接用 **Modules/1.x** 规范，但应该尽可能与 **Modules/1.x** 规范保持一致。这个观点下的典型代表是 [BravoJS](https://code.google.com/archive/p/bravojs) 和 **FlyScript** 的作者。**FlyScript** 的作者提出了 [Modules/Wrappings](http://wiki.commonjs.org/wiki/Modules/Wrappings) 规范，这规范是 **CMD** 规范的前身。可惜的是 **BravoJS** 太学院派，**FlyScript** 后来做了自我阉割，将整个网站（flyscript.org）下线了。

### CommonJS 加载机制

这里要讲的是 **Modules/1.X** 规范的语法，即 Node.js 采用的规范。

- 导出模块：`module.exports = value` or `exports.xxx = value`
- 导入模块：`require(xxx)`

每一个文件就是 **CommonJS** 的一个模块，使用 `require` 加载模块时将执行整个文件，然后在内存中生成一个对象，需要时就会到这个对象上面取值。所以即使我们重复 `require` 同一个模块，都只会运行一次文件。

所以，**CommonJS 模块的导入是导出模块的值的拷贝**，一旦导出，即使导出模块内部发生了变化，导出的值也不会随之变化。这与 ES6 的模块化截然不同。

## AMD 与 RequireJS

> AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
>
> RequireJS 想成为浏览器端的模块加载器，同时也想成为 Rhino / Node 等环境的模块加载器。

**AMD** 对模块的态度是预执行：
```js
define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
  a.doSomething()
  // 此处略去 100 行
  b.doSomething()
)
```
而 **Modules/1.X** 则不同：
```js
var a = require("./a") // 执行到此处时，a.js 才同步下载并执行
```
这应该是 **AMD** 与其他规范最大的差异，我更偏向于 **Modules/1.X** 规范，但是不评论二者的好与坏，毕竟从这个方面看，现在的 ES6 的模块机制 更偏向 **AMD**。

## CMD 与 SeaJS
**SeaJS** 起源于 **Modules/2.0**，但更多的加入了许多实战派的理念。

> CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。

**CMD** 对模块的态度是 懒执行：
```js
define(function(require, exports, module) {
   var a = require('./a')
   a.doSomething()
   // 此处略去 100 行
   var b = require('./b') // 依赖可以就近书写
   b.doSomething()
})
```
从这一方面看，CMD 更相像于 **Modules/1.X**。

[虽然 **AMD** 也支持 **CMD** 的写法，同时还支持将 `require` 作为依赖项传递，但 **RequireJS** 的作者默认是最喜欢上面的写法，也是官方文档里默认的模块定义写法。](https://www.zhihu.com/question/20351507/answer/14859415)

## UMD

**UMD** 是 **AMD** 和 **CommonJS** 的糅合。

**UMD** 的存在像是语法糖，首先判断是否支持 **CommonJS** ：
```js
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' // 判断是否支持 CommonJS
  ? module.exports = factory()
  : // ...
}(this, (function () {
// ...
})));
```
然后判断是否支持 **AMD**：
```js
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' // 判断是否支持 CommonJS
  ? module.exports = factory()
  : typeof define === 'function' && define.amd // 判断是否支持 AMD
    ? define(factory)
    : (global.React = factory());
}(this, (function () {
// ...
})));
```

## ES6 模块化

前文提到 **CommonJS** 模块的导入是导出模块的值的拷贝。

与此不同，**ES6 模块输出的是值的引用**，除此之外：

- **CommonJS** 模块是运行时加载，**ES6 模块**是编译时输出接口。
- **CommonJS** 加载的是一个对象，对象只有在文件运行完才能生成，而 **ES6 模块**在代码静态解析阶段就会生成。

可以理解为引擎对文件静态分析时，遇到 `import` 会生成一个只读引用，等文件真正执行时，根据只读引用到被加载的模块内取值。因此 **ES6 模块**不需要缓存值。

## 最后

无论是 **CommonJS** **AMD** **CMD** 到最后的 **ES6 模块**，都是 JSer 在不断探索最优解决方案的产物，前端正处于黎明前的黑暗，正一步步走向光明的未来，而处在这条路上的 JSer，正是不断探索发觉未来的奠基者。

参考：
1. [前端模块化开发那点历史](https://github.com/seajs/seajs/issues/588)
2. [AMD 和 CMD 的区别有哪些](https://www.zhihu.com/question/20351507/answer/14859415)
3. [Module 的加载实现](http://es6.ruanyifeng.com/#docs/module-loader)