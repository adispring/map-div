'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _mapLoader = require('./mapLoader');

var _mapLoader2 = _interopRequireDefault(_mapLoader);

var _defaultMapsConfig = require('./defaultMapsConfig');

var _defaultMapsConfig2 = _interopRequireDefault(_defaultMapsConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadMap = function loadMap(Config) {
  return new _promise2.default(function (resolve, reject) {
    return (0, _mapLoader2.default)(Config, function (err, data) {
      return _ramda2.default.isNil(err) ? resolve(data) : reject(err);
    });
  });
}; /* eslint consistent-return: 0, no-unused-expressions: 0, no-console: 0 */

var initMapInstance = function initMapInstance(DivId, Opts) {
  return new _promise2.default(function (resolve) {
    var _window = window,
        XMap = _window.XMap;

    var mapInstance = new XMap.Map(document.getElementById(DivId), Opts);
    XMap.event.addListener(mapInstance, 'complete', function () {
      return resolve(mapInstance);
    });
  });
};

var createMap = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(Config, DivId) {
    var config, initedMap;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _ramda2.default.merge(_defaultMapsConfig2.default[Config.name], Config);
            _context.next = 3;
            return loadMap(config);

          case 3:
            _context.next = 5;
            return initMapInstance(DivId, config.initOpts);

          case 5:
            initedMap = _context.sent;
            return _context.abrupt('return', initedMap);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function createMap(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = createMap;