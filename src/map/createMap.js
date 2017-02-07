/* eslint consistent-return: 0, no-unused-expressions: 0, no-console: 0 */

import R from 'ramda';
import mapLoader from './mapLoader';
import defaultMapsConfig from './defaultMapsConfig';

const loadMap = (Config) => new Promise((resolve, reject) =>
  mapLoader(Config, (err, data) => (R.isNil(err) ? resolve(data) : reject(err)))
);
const initMapInstance = (DivId, Opts) => new Promise((resolve) => {
  const { XMap } = window;
  const mapInstance = new XMap.Map(document.getElementById(DivId), Opts);
  XMap.event.addListener(mapInstance, 'complete', () => resolve(mapInstance));
});

const createMap = async (Config, DivId) => {
  const config = R.merge(defaultMapsConfig[Config.name], Config);
  await loadMap(config);
  const initedMap = await initMapInstance(DivId, config.initOpts);
  return initedMap;
};

export default createMap;
