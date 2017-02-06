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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint consistent-return: 0, no-unused-expressions: 0, no-console: 0 */

var loadMap = function loadMap(mapConfigs) {
  return new _promise2.default(function (resolve, reject) {
    return (0, _mapLoader2.default)(mapConfigs, function (err, data) {
      return _ramda2.default.isNil(err) ? resolve(data) : reject(err);
    });
  });
};
var initMapInstance = function initMapInstance(mapDivId, mapOpts) {
  return new _promise2.default(function (resolve) {
    var _window = window,
        map = _window.map;

    var mapInstance = new map.Map(document.getElementById(mapDivId), mapOpts);
    map.event.addListener(mapInstance, 'complete', function () {
      return resolve(mapInstance);
    });
  });
};

var createMap = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(mapConfigs, mapDivId) {
    var initedMap;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return loadMap(mapConfigs);

          case 2:
            _context.next = 4;
            return initMapInstance(_ramda2.default.prop('initOpts', mapConfigs), mapDivId);

          case 4:
            initedMap = _context.sent;
            return _context.abrupt('return', initedMap);

          case 6:
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