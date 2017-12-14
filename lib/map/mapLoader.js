'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _loadScript = require('load-script');

var _loadScript2 = _interopRequireDefault(_loadScript);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var callbacks = []; /* eslint max-len : 0 */

var done = function done(err, map) {
  callbacks.forEach(function (fn) {
    return fn(err, map);
  });
  callbacks.length = 0;
};
var isBMap = _ramda2.default.equals('BMap');
var keyName = function keyName(name) {
  return isBMap(name) ? 'ak' : 'key';
};

var mapLoader = function mapLoader(Config, cb) {
  var url = Config.url,
      version = Config.version,
      key = Config.key,
      query = Config.query;

  callbacks.push(cb);

  if (typeof window === 'undefined') return;
  if (typeof window.XMap !== 'undefined') {
    done(null, window.XMap);
  } else if (callbacks.length <= 1) {
    var mapCallback = 'mapCallback' + Date.now();
    window[mapCallback] = function () {
      window.XMap = _ramda2.default.path(Config.mapInstancePath, window);
      done(null, window.XMap);
      delete window[mapCallback];
    };
    var src = url + '?v=' + version + '&' + keyName(Config.name) + '=' + key + '&callback=' + mapCallback + '&' + _querystring2.default.stringify(query);
    (0, _loadScript2.default)(src, function (err) {
      if (err) {
        done(err);
      }
    });
  }
  // AMap === undefined && callbacks.length > 1 Callbacks should wait until AMap is ready
};

exports.default = mapLoader;