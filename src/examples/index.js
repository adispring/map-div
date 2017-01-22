/* eslint no-unused-vars: 0, no-console: 0 */
const component = id => {
  const div = document.createElement('div');
  div.id = id;
  div.style.height = '500px';
  return div;
};
document.body.appendChild(component('amapId'));

import createMap from '../map/createMap';
import amapKey from './amapKey';
const map = createMap(amapKey, 'amapId').then(console.log);
