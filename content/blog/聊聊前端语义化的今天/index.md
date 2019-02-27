---
title: 聊聊前端语义化的今天
date: "2019-02-27"
description: 前端语义化一度和 HTML 相关联，前端开发者们通过使用一些视觉表现类似，语义不同的 HTML 标签来提高 项目/产品 质量。在这里我聊得可能范围更加宽泛，包括但不仅仅是 HTML 的语义化。
---

> [语义化是前端开发里面的一个专用术语，其优点在于标签语义化有助于构架良好的html结构，有利于搜索引擎的建立索引、抓取；另外，亦有利于页面在不同的设备上显示尽可能相同；此外，亦有利于构建清晰的机构，有利于团队的开发、维护。](https://zh.wikipedia.org/wiki/%E8%AF%AD%E4%B9%89%E5%8C%96)

前端语义化一度和 HTML 相关联，前端开发者们通过使用一些视觉表现类似，语义不同的 HTML 标签来提高 项目/产品 质量。在这里我聊得可能范围更加宽泛，包括但不仅仅是 HTML 的语义化。

## 语义化的前世

1998年 [Tim Berners-Lee](https://zh.wikipedia.org/wiki/%E8%92%82%E5%A7%86%C2%B7%E4%BC%AF%E7%BA%B3%E6%96%AF-%E6%9D%8E) 提出了[语义网](https://zh.wikipedia.org/wiki/%E8%AF%AD%E4%B9%89%E7%BD%91)的概念，它的核心是：
> 通过给万维网上的文档（如: HTML文档）添加能够被计算机所理解的语义（元数据），从而使整个互联网成为一个通用的信息交换介质。

在这里我想通过多个角度去理解语义化。

## HTML

我所能查询到的大部分语义化都与 HTML 有关，所以先聊聊 HTML。

HTML 早期版本就考虑到语义化，推出了 `h1`~`h6` `img` `ul` `ol` `li` 等 HTML 标签，早期搜索引擎也很好的利用这些语义化标签合理的抓取内容。

而随着互联网内容的不断丰富，这些标签明显不足以描述各种功能，于是前端开始用 `id` `class` 等属性进一步丰富 Web。此时搜索引擎如果仅靠标签抓取内容就显得有些力不从心了。

HTML5 发布后，诸如 `section` `header` `footer` `main` 等标签能更好的被搜索引擎抓取，并且降低了开发人员之间的交流成本，从而降低了维护成本。

这里有一份 [HTML5 标签列表](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list#%E6%A0%B9%E5%85%83%E7%B4%A0)，推荐一波。

### 举例

我曾经疑问 `<b>` `<strong>`、`<i>`  `<em>`的区别，从表现形式上看 `<b>` `<strong>` 都是文本的加粗、`<i>`  `<em>` 都是文本的斜体，似乎没什么区别。

实际上 `em` 元素代表对其内容的强调：
```
我今天<em>吃药</em>的时候看到一个新闻
我今天吃药的时候看到一个<em>新闻</em>
```
这样爬虫就知道该关注你吃药还是关注新闻了（认真脸）。

`strong` 元素代表内容的强烈的重要性、严重性或者紧急性：
```
我正在睡觉，同桌突然戳我一下说<strong>老师来了<strong/>
```

### 总结：
1. 利于SEO，不再解释。
2. 利于开发与维护，遵循同一个标准开发，同时让页面结构更加的清晰，自然提高了工作效率。
3. 利于更多设备解析。

## HTTP 请求语义化

我们最常用的 **HTTP 请求方法** 就是 `GET` `POST` 了，先从历史的角度聊聊。

### HTTP/0.9

作为 HTTP 最早大规模使用的版本，只有一个 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 方法，**目的是从服务器获取 HTML 文档**。

### HTTP/1.0

这个版本新增了 [`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD) [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 两种方法。

- HEAD - `HEAD` 与 `GET` 类似，但 **`HEAD` 不含有呈现数据，仅含有 HTTP 头信息**。通常用于判断资源是否存在。(若有其他用途欢迎留言或联系我提供呦)

- POST - `POST` 用于发送数据给服务端。**HTTP/1.1** 中描述 `POST` 涵盖一下功能：
  - 注释已有的资源
  - 在公告板，新闻组，邮件列表或类似的文章组中发布消息;
  - 通过注册新增用户;
  - 向数据处理程序提供一批数据，例如提交一个表单;
  - 通过追加操作，扩展数据库数据.

### HTTP/1.1

这个版本新增了 [`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT)、[`DELETE`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/DELETE)、[`CONNECT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/CONNECT)、[`OPTIONS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)、[`TRACE`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/TRACE) 五种方法。

- **PUT** - `PUT` 方法用请求有效载荷替换目标资源的所有当前表示。
  - 与 `POST` 类似，都是往服务端发送数据，区别：
  - client对一个URI发送一个Entity，服务器在这个URI下如果已经又了一个Entity，那么此刻服务器应该替换成client重新提交的，也由此保证了PUT的幂等性。如果服务器之前没有Entity ，那么服务器就应该将client提交的放在这个URI上。
  - 通过上面可以知道，如果用PUT来达到更改资源，需要client提交资源全部信息，如果只有部分信息，不应该使用PUT（因为服务器使用client提交的对象整体替换服务器的资源）。
- **DELETE** - `DELETE` 用于请求服务器删除所请求 `URI` 所标识的资源。
- **CONNECT** - `CONNECT` 方法可以开启一个客户端与所请求资源之间的双向沟通的通道。它可以用来创建隧道（tunnel）。
- **OPTIONS** - `OPTIONS` 方法用于获取目的资源所支持的通信选项。
- **TRACE** - `TRACE` 方法实现沿通向目标资源的路径的消息环回（loop-back）测试 ，提供了一种实用的 debug 机制。
  - 请求的最终接收者应当原样反射（reflect）它接收到的消息，除了以下字段部分，作为一个 `Content-Type` 为 `message/http` 的200（OK）响应的消息的主体（body）返回给客户端 。

### HTTP/1.1 的扩展

- **PATCH** - [`PATCH`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PATCH) 用于对资源进行部分修改。前文提到使用 `PUT` 需要客户端提供资源全部信息整体替换，而对于只修改部分资源的场景，`PATCH` 尤为适合。

### 举例

过去为了解决跨域问题客户端曾使用 [`jsonp`](https://zh.wikipedia.org/wiki/JSONP)与服务端交互，而 `jsonp` 需要一个带有 `src`  属性的 `script` 标签发送一条 `GET` 请求绕过跨域限制，这条请求可以作为增删改查等任何行为的触发器，所以很明显，`jsonp` 不符合语义化的规范。

### 总结

这一片段相关的内容很容易让人与 **RESTful 规范** 相联系，我所理解的是 **RESTful 规范** 本身就是语义化各种方案的实现，所以一定程度上 **RESTful 规范** 的优点也是 **HTTP 请求语义化**的优点。

1. `GET` `HEAD` `PUT` `DELETE` `OPTIONS` 是 [幂等](https://developer.mozilla.org/zh-CN/docs/Glossary/%E5%B9%82%E7%AD%89) 的，`POST` `PATCH` 是非幂等的。
2. 服务自解释 - 例如评论的增删改查，只需要一个 URI `/common`，其他的该怎么做一目了然。
3. [API内部实现解耦](http://hippoom.github.io/blogs/value-of-hypermedia-from-client-perspective.html)

## JavaScript 语义化

### 不要写无用的注释

```js
// 数据类型判断
if(Object.prototype.toString.call(str) === “[object String]”){
    // doSomething();
}；
```
与其为这种略复杂的逻辑写注释，不如封装为语义化函数：
```js
const isObject = val => val != null
  && typeof val === 'object'
  && Array.isArray(val) === false
  && Object.prototype.toString.call(val) === '[object Object]';
  
if(isObject(str)) {
    // doSomething();
}
```

### 命名

这里只是抛转引玉，并不是规范。

#### 1. 注意词性
  - 普通变量/属性用「名词」
  ```javascript
  var person = {
      name: 'Frank'
  }
  var student = {
      grade: 3,
      class: 2
  }
  ```

  - bool变量/属性用「形容词」或者「be动词」或者「情态动词」或者「hasX」

  ```javascript
  var person = {
      dead: false, // 如果是形容词，前面就没必要加 is，比如isDead 就很废话
      canSpeak: true, //情态动词有 can、should、will、need 等，情态动词后面接动词
      isVip: true, // be 动词有 is、was 等，后面一般接名词
      hasChildren: true, // has 加名词
  }
  ```

  - 普通函数/方法用「动词」开头

  ```javascript
  var person = {
      run(){}, // 不及物动词
      drinkWater(){}, // 及物动词
      eat(foo){}, // 及物动词加参数（参数是名词）
  }
  ```

  - 回调、钩子函数用「介词」开头，或用「动词的现在完成时态」

  ```javascript
  var person = {
      beforeDie(){},
      afterDie(){},
      // 或者
      willDie(){}
      dead(){} // 这里跟 bool 冲突，你只要不同时暴露 bool dead 和函数 dead 就行，怕冲突就用上面的 afterDie
  }
  button.addEventListener('click', onButtonClick)
  var component = {
      beforeCreate(){},
      created(){},
      beforeMount(){},
      mounted(){},
      beforeUpdate(){},
      updated(){},
      activated(){},
      deactivated(){},
      beforeDestroy(){},
      destroyed(){},
      errorCaptured(){}
  }
  ```

  - 容易混淆的地方加前缀

  ```javascript
  div1.classList.add('active') // DOM 对象
  div2.addClass('active') // jQuery 对象
  不如改成
  domDiv1 或 elDiv1.classList.add('active')
  $div2.addClass('active')
  ```

  - 属性访问器函数可以用名词

  ```javascript
  $div.text() // 其实是 $div.getText()
  $div.text('hi') // 其实是 $div.setText('hi')
  ```

#### 2. 注意一致性
  - 介词一致性
    如果你使用了 before + after，那么就在代码的所有地方都坚持使用
    如果你使用了 before + 完成时，那么就坚持使用
    如果你改来改去，就「不一致」了，不一致将导致「不可预测」
  - 顺序一致性
    比如 updateContainerWidth 和 updateHeightOfContainer 的顺序就令人很别扭，同样会引发「不可预测」
  - 表里一致性
    函数名必须完美体现函数的功能，既不能多也不能少。
    比如
    ```javascript
    function getSongs(){
        return $.get('/songs).then((response){
            div.innerText = response.songs
        })
    }
    ```
    就违背了表里一致性，getSongs 表示获取歌曲，并没有暗示这个函数会更新页面，但是实际上函数更新了 div，这就是表里不一，正确的写法是
    - 要么纠正函数名
    ```javascript
    function getSongsAndUpdateDiv(){
        return $.get('/songs).then((response){
            div.innerText = response.songs
        })
    }
    ```
    - 要么写成两个函数
    ```javascript
    function getSongs(){
        return $.get('/songs)
    }
    function updateDiv(songs){
        div.innerText = response.songs
    }
    getSongs().then((response)=>{
        updateDiv(response.songs)
    })
    ```
  - 时间一致性:
    有可能随着代码的变迁，一个变量的含义已经不同于它一开始的含义了，这个时候你需要及时改掉这个变量的名字。
    这一条是最难做到的，因为写代码容易，改代码难。如果这个代码组织得不好，很可能会出现牵一发而动全身的情况（如全局变量就很难改）

## 最后

对于机器而言，语义化能更容易的分析数据。对于程序猿而言语义化能让我们少干点活，多点时间享受生活。
> 前端现在是黎明前的黑暗，在几年内一定会明晰起来

参考：
- [谈谈对HTML语义化的理解](http://chenhaizhou.github.io/2015/12/09/html-sense.html)
- [Web语义化标准解读](https://segmentfault.com/a/1190000004553994)
- [从 HTTP 0.9 到 QUIC](https://zhuanlan.zhihu.com/p/23366045)
- [HTTP协议的方法及应用场景](https://www.cnblogs.com/susanhonly/p/8508596.html)
- [HTTP中post和put的根本区别和优势？](https://www.zhihu.com/question/48482736)
- [如何让你的JavaScript代码更加语义化](https://segmentfault.com/a/1190000002519080)