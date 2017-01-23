'use strict';

var _createMap = require('../map/createMap');

var _createMap2 = _interopRequireDefault(_createMap);

var _amapKey = require('./amapKey');

var _amapKey2 = _interopRequireDefault(_amapKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-unused-vars: 0, no-console: 0 */
var component = function component(id) {
  var div = document.createElement('div');
  div.id = id;
  div.style.height = '500px';
  return div;
};
document.body.appendChild(component('amapId'));

var map = (0, _createMap2.default)(_amapKey2.default, 'amapId').then(console.log);