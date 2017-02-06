/* eslint no-unused-vars: 0 */
/* eslint no-param-reassign: 0 */
import R from 'ramda';

const component = id => {
  const div = document.createElement('div');
  div.id = id;
  div.style.height = '500px';
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
)(['AMap', 'GMap', 'QMap']);

const map = createMap({ name: toMapName[getRandomIntInclusive(0, 2)] }, 'mapId');

