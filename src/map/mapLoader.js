import R from 'ramda';
import loadScript from 'load-script';

const callbacks = [];
const done = (err, map) => {
  callbacks.forEach(fn => fn(err, map));
  callbacks.length = 0;
};

const mapLoader = (mapConfig, cb) => {
  const { url, version, key } = mapConfig;
  callbacks.push(cb);

  if (typeof window === 'undefined') return;
  if (typeof window.map !== 'undefined') {
    done(null, window.map);
  } else if (callbacks.length <= 1) {
    const mapCallback = `mapCallback${Date.now()}`;
    window[mapCallback] = () => {
      window.map = R.path(mapConfig.mapInstancePath, window);
      done(null, window.map);
      delete window[mapCallback];
    };
    const src = `${url}?v=${version}&key=${key}&callback=${mapCallback}`;
    loadScript(src, (err) => {
      if (err) {
        done(err);
      }
    });
  }
  // AMap === undefined && callbacks.length > 1 Callbacks should wait until AMap is ready
};

export default mapLoader;
