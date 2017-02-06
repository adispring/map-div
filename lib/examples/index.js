'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _createMap = require('../map/createMap');

var _createMap2 = _interopRequireDefault(_createMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component(id) {
  var div = document.createElement('div');
  div.id = id;
  div.style.height = '500px';
  return div;
}; /* eslint no-unused-vars: 0 */
/* eslint no-param-reassign: 0 */

document.body.appendChild(component('mapId'));

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var toMapName = _ramda2.default.compose(_ramda2.default.fromPairs, _ramda2.default.addIndex(_ramda2.default.map)(function (val, index) {
  return [index, val];
}))(['AMap', 'GMap', 'QMap']);

var map = (0, _createMap2.default)({ name: toMapName[getRandomIntInclusive(0, 2)] }, 'mapId');