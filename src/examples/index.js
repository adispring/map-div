/* eslint no-unused-vars: 0, no-console: 0 */
const component = id => {
  const div = document.createElement('div');
  div.id = id;
  div.style.height = '500px';
  return div;
};
document.body.appendChild(component('mapId'));

import createMap from '../map/createMap';
import mapKey from './mapKey';
const map = createMap(mapKey, 'mapId').then(console.log);
