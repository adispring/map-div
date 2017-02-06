/* eslint consistent-return: 0, no-unused-expressions: 0, no-console: 0 */

import R from 'ramda';
import mapLoader from './mapLoader';

const loadMap = (mapKey) => new Promise((resolve, reject) =>
  mapLoader(mapKey, err => (R.isNil(err) ? resolve() : reject(err)))
);
const initMapInstance = (mapId) => new Promise((resolve) => {
  const { map } = window;
  const mapInstance = new window.map.Map(document.getElementById(mapId));
  map.event.addListener(mapInstance, 'complete', () => resolve(mapInstance));
});

const createMap = async (mapKey, divId) => {
  await loadMap(mapKey);
  const initedMap = await initMapInstance(divId);
  return initedMap;
};

export default createMap;
