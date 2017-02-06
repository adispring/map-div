/* eslint consistent-return: 0, no-unused-expressions: 0, no-console: 0 */

import R from 'ramda';
import mapLoader from './mapLoader';
import defaultMapsConfig from './defaultMapsConfig';

const loadMap = (mapConfigs) => new Promise((resolve, reject) =>
  mapLoader(mapConfigs, (err, data) => (R.isNil(err) ? resolve(data) : reject(err)))
);
const initMapInstance = (mapDivId, mapOpts) => new Promise((resolve) => {
  const { map } = window;
  const mapInstance = new map.Map(document.getElementById(mapDivId), mapOpts);
  map.event.addListener(mapInstance, 'complete', () => resolve(mapInstance));
});

const createMap = async (mapConfig, mapDivId) => {
  const config = R.merge(defaultMapsConfig[mapConfig.name], mapConfig);
  await loadMap(config);
  const initedMap = await initMapInstance(mapDivId, config.initOpts);
  return initedMap;
};

export default createMap;
