/* eslint no-unused-vars: 0 */
/* eslint no-param-reassign: 0 */
import R from 'ramda';

const BMap = null;

const component = id => {
  const div = document.createElement('div');
  div.id = id;
  div.style.height = '500px';
  div.style.minWidth = '800px';
  return div;
};
document.body.appendChild(component('mapId'));

import createMap from '../map/createMap';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const toMapName = R.compose(
  R.fromPairs,
  R.addIndex(R.map)((val, index) => [index, val])
)(['AMap', 'GMap', 'QMap', 'BMap']);

const map = createMap({ name: toMapName[getRandomIntInclusive(0, 3)] }, 'mapId').then(mapInst => {
  // 百度地图没有默认的center & zoom，需要设置，否则不出现地图。
  if (window.BMap) {
    mapInst.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
  }
  console.log(mapInst);
});

