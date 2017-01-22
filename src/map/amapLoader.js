import loadScript from 'load-script';

const callbacks = [];
const done = (err, AMap) => {
  callbacks.forEach(fn => fn(err, AMap));
  callbacks.length = 0;
};

const amapLoader = (amapKey, cb) => {
  callbacks.push(cb);

  if (typeof window === 'undefined') return;
  if (typeof window.AMap !== 'undefined') {
    done(null, window.AMap);
  } else if (callbacks.length <= 1) {
    const amapCallback = `amapCallback${Date.now()}`;
    window[amapCallback] = () => {
      done(null, window.AMap);
      delete window[amapCallback];
    };
    const src = `//webapi.amap.com/maps?v=1.3&key=${amapKey}&callback=${amapCallback}`;
    loadScript(src, (err) => { if (err) done(err); });
  }
  // AMap === undefined && callbacks.length > 1 Callbacks should wait until AMap is ready
};

export default amapLoader;
