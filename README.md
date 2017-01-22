# 高德地图 JavaScript API 类引入和实例初始化

## 开发

挂载 AMap 类到浏览器时，用的是无协议 url。

```js
const src = `//webapi.amap.com/maps?v=1.3&key=${amapKey}&callback=${amapCallback}`;
```

需要通过 url 访问，不能直接 open index.html。

---

调试：

1. 修改 webpack.config.js 的 entry：

```js
  entry: {
    index: ['babel-polyfill', require.resolve('./src/examples/index')],
//    createMap: ['babel-polyfill', require.resolve('./src/map/createMap')],
  },
```

2. http 调试

- 方法1

```console
$ webpack-dev-server
```

通过 http://localhost:8080/webpack-dev-server/index.html

- 方法2

也可以使用 ecstatic

