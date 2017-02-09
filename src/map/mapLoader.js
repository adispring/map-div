import R from 'ramda';
import loadScript from 'load-script';
import qs from 'querystring';

const callbacks = [];
const done = (err, map) => {
  callbacks.forEach(fn => fn(err, map));
  callbacks.length = 0;
};

const mapLoader = (Config, cb) => {
  const { url, version, key, query } = Config;
  callbacks.push(cb);

  if (typeof window === 'undefined') return;
  if (typeof window.XMap !== 'undefined') {
    done(null, window.XMap);
  } else if (callbacks.length <= 1) {
    const mapCallback = `mapCallback${Date.now()}`;
    window[mapCallback] = () => {
      window.XMap = R.path(Config.mapInstancePath, window);
      done(null, window.XMap);
      delete window[mapCallback];
    };
    const src = `${url}?v=${version}&key=${key}&callback=${mapCallback}&${qs.stringify(query)}`;
    loadScript(src, (err) => {
      if (err) {
        done(err);
      }
    });
  }
  // AMap === undefined && callbacks.length > 1 Callbacks should wait until AMap is ready
};

export default mapLoader;
