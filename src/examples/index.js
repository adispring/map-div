const R = require('ramda');

const component = id => {
  const div = document.createElement('div');
  div.id = id;
  div.innerHTML = 'HAHAhehe';
  return div;
};
document.body.appendChild(component('amapId'));
