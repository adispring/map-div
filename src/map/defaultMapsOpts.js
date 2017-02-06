// name 和 key 是必填项，以确定 map 的类型和使用者的身份。传入信息会覆盖默认信息
const defaultMapsOpts = {
  AMap: {
    name: 'AMap',
    url: '//webapi.amap.com/maps',
    key: 'baadfb049b6ba924a674eea5cec4100f',
    version: '1.3',
    mapInstancePath: ['AMap'],
  },
  GMap: {
    name: 'GMap',
    url: 'maps.googleapis.com/maps/api/js',
    key: 'AIzaSyDknh-uMiYKdpFLhHGSggLKE-iTLPPu_jE',
    version: undefined,
    mapInstancePath: ['google', 'maps'],
  },
  QMap: {
    name: 'QMap',
    url: '//map.qq.com/api/js',
    key: '5P7BZ-DAMK5-YFWID-QC3QI-HSMD2-4SBUD',
    version: '2.exp',
    mapInstancePath: ['qq', 'maps'],
  },
};

export default defaultMapsOpts;
