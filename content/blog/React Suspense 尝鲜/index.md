---
title: React Suspense 尝鲜
date: "2019-03-06"
description: Suspense 让组件遇到异步操作时进入“悬停”状态，等异步操作有结果时再回归正常状态。
---

## 前言

如同字面意思，Suspense 让组件遇到异步操作时进入“悬停”状态，等异步操作有结果时再回归正常状态。

异步操作简单归为两类：
1. 异步加载代码
2. 异步加载数据

## 异步加载代码

异步加载代码就是所谓的 `code splitting`，实现起来就像是这样：
```jsx
import React, {lazy, Suspense} from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}
```

值得一提的是目前版本 (截止至 react@16.8) 还不支持服务端渲染，但还是会在以后的版本上支持的。

## 异步加载数据

Suspense 异步加载数据截止到目前都是不稳定的版本，根据 [React 16.x Roadmap](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html)，大概到2019年中期发布稳定版本，但是 React 官方提供了一个独立的包 [react-cache](https://github.com/facebook/react/tree/master/packages/react-cache)，使用它结合 `react@16.6.0` 可以让我们提前感受一下 Suspense 异步加载数据。

```jsx
import { unstable_createResource } from 'react-cache';

const getSomething = (something) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(something);
  }, 1000);
})

const resource = unstable_createResource((id) => getSomething(id))

function Demo() {
  const data = resource.read(666)
  return (
    <div>{data}</div>
  );
}
```

## 细谈 Suspense

在上面的实例中，Suspense 组件传入了 `fallback` 属性，这个属性用于显示加载中的页面，就是俗称的 loading 咯。

那么我们在想一个问题，如果一个异步请求数据的过程非常快，这样会使得加载中画面一闪而过，导致闪屏。

Suspense 针对这种情况给出解决方案 `maxDuration` 属性：
```jsx
<Suspense fallback={<Spinner />} maxDuration={500}>
  // ...
</Suspense>
```

当异步获取数据的时间大于 `maxDuration` 时间时展示 `fallback`，否则直接展示数据。

需要注意的是 `maxDuration` 属性只有在 `Concurrent Mode` 下才能生效，在以往的 Sync 模式下 `maxDuration` 始终为0， 具体使用简单给出一个实例：
```jsx
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM
  .unstable_createRoot(document.getElementById('root'))
  .render(
    <React.unstable_ConcurrentMode>
      <App />
    </React.unstable_ConcurrentMode>
  );
```

## 原理

Suspense 的实现原理颇有争议。

当我们在 render 内写异步请求数据时会抛出一个异常，当然它应该是一个 `promise`，这个异常会被 Suspense 内一个新的生命周期 `ComponentDidCatch` 捕获到，在这个生命周期内 Suspense 将子组件渲染为 loading ，等到异步请求结束，loading结束，此时又回到了正常的组件。

翻了一下 `unstable_createResource` 的源码，果然 `Pending` 状态下会 `throw` 一个 `suspender` 对象，这个对象就是一个 `promise`。

```js
function unstable_createResource(fetch, maybeHashInput) {
  // ...
  var resource = {
    read: function (input) {
      // ...
      var key = hashInput(input);
      var result = accessResult(resource, fetch, input, key);
      switch (result.status) {
        case Pending:
          {
            var suspender = result.value;
            throw suspender;
          }
        case Resolved:
          {
            var _value = result.value;
            return _value;
          }
        case Rejected:
          {
            var error = result.value;
            throw error;
          }
        default:
          // Should be unreachable
          return undefined;
      }
    },
    // ...
  };
  return resource;
}
```

## 总结

不知道你能不能接受如此 hack 的实现方式，固然缺点是有的，但是它带来的便利性真的让我异常期待。

参考：
- [The One with Concurrent Mode](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html#react-16x-q2-2019-the-one-with-concurrent-mode)
- [React Supense和异步渲染的一点矛盾](https://zhuanlan.zhihu.com/p/57938605)
- [React：Suspense的实现与探讨](https://zhuanlan.zhihu.com/p/34210780)
- [深度理解 React Suspense
](https://juejin.im/post/5c7d4a785188251b921f4e26)