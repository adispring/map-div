# 地图（ JavaScript API 版本）初始化
---

## 使用

1. 兼容高德、腾讯、Google 地图

```js
import createMap from 'map-div';

createMap(mapConfig, divId).then(map => { do something with initialized map instance });

/* using map global Class: 
1. window.XMap / XMap
2. or map native syntax:
   AMap: AMap; QMap: qq.maps; GMap: google.maps.
*/
```

2. createMap 函数说明：

    - 参数：
    ```js
    mapConfg：地图加载和初始化参数。

    divId：要挂载的 div 的 id。
    ```

    - 返回值：
    ```js
    包含地图实例的 Promise。
    ```

3. mapConfig 格式以及使用说明如下：
```js
const defaultMapsConfig = {
  AMap: {
    name: 'AMap', // 地图的类型，（此为高德地图）required
    url: '//webapi.amap.com/maps', // optional
    key: 'YOUR_AMAP_API_KEY', // 您申请的地图应用的 API_KEY，required
    version: '1.3', // 地图版本, optional
    initOpts: { // 初始化参数。注意，不同地图参数格式不一样，optional（google 地图 required）
      center: [116.396776, 39.917549],
      zoom: 11,
    },
    mapInstancePath: ['AMap'], // Don't modify this property!!!
  },
  GMap: {
    name: 'GMap', // 谷歌地图
    url: '//maps.google.cn/maps/api/js',
    key: 'YOUR_GOOGLE_MAP_API_KEY',
    version: 3,
    initOpts: { // 初始化参数，仅对于 Google 地图，下面两个参数是必须的。
      center: { lat: 39.917549, lng: 116.396776 },
      zoom: 11,
    },
    mapInstancePath: ['google', 'maps'],
  },
  QMap: {
    name: 'QMap', // 腾讯地图
    url: '//map.qq.com/api/js',
    key: 'YOUR_QQ_MAP_API_KEY',
    version: '2',
    mapInstancePath: ['qq', 'maps'],
  },
```

4. 库中使用了 ES2017 的 async 和 await，只是对文件进行了简单的 babel 转换，所以可能要在引入该库的工程中加入相应的转换插件和依赖库。

```console
$ npm install --save-dev babel-plugin-syntax-async-functions
```

## 原理

1. 加载地图类 Map 到浏览器中

2. 创建并初始化地图实例，将地图实例绑定到一个 DOM 节点（通常是 div 元素）作为地图的容器。

## 调试 

挂载 AMap 类到浏览器时，用的是无协议 url。

```js
const src = `${url}?v=${version}&key=${key}&callback=${mapCallback}`;
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

```console
$ webpack-dev-server
```

通过 http://localhost:8080/webpack-dev-server/index.html

也可以使用 ecstatic

## 打包、发布 npm

1. 修改 webpack.config.js 

```js
1. 

const libify = require.resolve('webpack-libify');
// const HtmlwebpackPlugin = require('html-webpack-plugin');

2.
  entry: {
//    index: ['babel-polyfill', require.resolve('./src/examples/index')],
    createMap: ['babel-polyfill', require.resolve('./src/map/createMap')],
  },

3.
    postLoaders: [
      {
        loader: libify,
      },
    ],
  },
//  plugins: [
//    new HtmlwebpackPlugin(),
//  ],
```

2. 打包

```console
$ npm run build
```

3. 发布

```console
$ npm publish 
```

