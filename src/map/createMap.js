/* eslint consistent-return: 0, no-unused-expressions: 0, no-console: 0 */

import R from 'ramda';
import mapLoader from './mapLoader';

const loadMap = (mapConfigs) => new Promise((resolve, reject) =>
  mapLoader(mapConfigs, (err, data) => (R.isNil(err) ? resolve(data) : reject(err)))
);
const initMapInstance = (mapOpts, mapDivId) => new Promise((resolve) => {
  const { map } = window;
  const mapInstance = new map.Map(document.getElementById(mapDivId), mapOpts);
  map.event.addListener(mapInstance, 'complete', () => resolve(mapInstance));
});

const createMap = async (mapConfigs, mapDivId) => {
  await loadMap(mapConfigs);
  const initedMap = await initMapInstance(R.prop('initOpts', mapConfigs), mapDivId);
  return initedMap;
};

export default createMap;
