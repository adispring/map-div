# 高德地图 JavaScript API 类引入和实例初始化
---

## 使用

```js
const map = createMap(amapKey, divId);
```

本库提供了一套使用方式：

1. 只是对文件进行了简单的 babel 转换，库中使用了 ES2017 的 async 和 await，所以要在引入该库的工程中加入相应的转换插件和依赖库。

引用 API

```js
import createMap from 'amap-div';
```

引入 babel 转换

```console
$ npm install --save-dev babel-plugin-syntax-async-functions
```

## 原理

1. 加载地图类 AMap 到浏览器中

2. 创建并初始化地图实例，将地图实例绑定到一个 DOM 节点（通常是 div 元素）作为地图的容器。

## 调试 

挂载 AMap 类到浏览器时，用的是无协议 url。

```js
const src = `//webapi.amap.com/maps?v=1.3&key=${amapKey}&callback=${amapCallback}`;
```

需要通过 url 访问，不能直接 open index.html。

---

方法：

1. 修改 webpack.config.js 

```js
1. 

// const libify = require.resolve('webpack-libify');
const HtmlwebpackPlugin = require('html-webpack-plugin');

2.
  entry: {
    index: ['babel-polyfill', require.resolve('./src/examples/index')],
//    createMap: ['babel-polyfill', require.resolve('./src/map/createMap')],
  },

3.
//    postLoaders: [
//      {
//        loader: libify,
//      },
//    ],
  },
  plugins: [
    new HtmlwebpackPlugin(),
  ],
```
2. http 调试

- 方法1

```console
$ webpack-dev-server
```

通过 http://localhost:8080/webpack-dev-server/index.html

- 方法2

也可以使用 ecstatic

