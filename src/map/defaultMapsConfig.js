// name 和 key 是必填项，以确定 map 的类型和使用者的身份。传入信息会覆盖默认信息
const defaultMapsConfig = {
  AMap: {
    name: 'AMap',
    url: '//webapi.amap.com/maps',
    key: 'baadfb049b6ba924a674eea5cec4100f',
    version: '1.3',
    initOpts: {
      center: [116.396776, 39.917549],
      zoom: 11,
    },
    mapInstancePath: ['AMap'],
  },
  GMap: {
    name: 'GMap',
    url: '//maps.google.cn/maps/api/js',
    // url: '//maps.googleapis.com/maps/api/js',
    key: 'AIzaSyDknh-uMiYKdpFLhHGSggLKE-iTLPPu_jE',
    version: 3,
    initOpts: {
      center: { lat: 39.917549, lng: 116.396776 },
      zoom: 11,
    },
    mapInstancePath: ['google', 'maps'],
  },
  QMap: {
    name: 'QMap',
    url: '//map.qq.com/api/js',
    key: '5P7BZ-DAMK5-YFWID-QC3QI-HSMD2-4SBUD',
    version: '2',
    mapInstancePath: ['qq', 'maps'],
  },
  BMap: {
    name: 'BMap',
    url: '//api.map.baidu.com/api',
    key: 'sOGPcGGAouF9uDiCLGXtNKPcKhhgOrHN',
    version: '2.0',
    mapInstancePath: ['BMap'],
  },
};

export default defaultMapsConfig;
