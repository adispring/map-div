/* eslint consistent-return: 0, no-unused-expressions: 0, no-console: 0 */

import R from 'ramda';
import amapLoader from './amapLoader';

const loadMap = (amapKey) => new Promise((resolve, reject) =>
  amapLoader(amapKey, err => (R.isNil(err) ? resolve() : reject(err)))
);
const initMapInstance = (mapId) => new Promise((resolve) => {
  const { AMap } = window;
  const mapInstance = new AMap.Map(mapId);
  AMap.event.addListener(mapInstance, 'complete', () => resolve(mapInstance));
});

const createMap = async (amapKey, divId) => {
  try {
    await loadMap(amapKey);
    const initedMap = await initMapInstance(divId);
    return initedMap;
  } catch (err) {
    console.log(err);
  }
};

export default createMap;
