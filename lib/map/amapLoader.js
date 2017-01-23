'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadScript = require('load-script');

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var callbacks = [];
var done = function done(err, AMap) {
  callbacks.forEach(function (fn) {
    return fn(err, AMap);
  });
  callbacks.length = 0;
};

var amapLoader = function amapLoader(amapKey, cb) {
  callbacks.push(cb);

  if (typeof window === 'undefined') return;
  if (typeof window.AMap !== 'undefined') {
    done(null, window.AMap);
  } else if (callbacks.length <= 1) {
    (function () {
      var amapCallback = 'amapCallback' + Date.now();
      window[amapCallback] = function () {
        done(null, window.AMap);
        delete window[amapCallback];
      };
      var src = '//webapi.amap.com/maps?v=1.3&key=' + amapKey + '&callback=' + amapCallback;
      (0, _loadScript2.default)(src, function (err) {
        if (err) done(err);
      });
    })();
  }
  // AMap === undefined && callbacks.length > 1 Callbacks should wait until AMap is ready
};

exports.default = amapLoader;