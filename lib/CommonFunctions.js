'use strict';

/**
 * General functions used on the whispermud-core-input-events bundle
 */

const { Config } = require('whispermud-core');

/**
 * @param {string} name
 * @return {boolean}
 */
exports.validateName = function(name) {
  const maxLength = Config.get('maxAccountNameLength');
  const minLength = Config.get('minAccountNameLength');

  if (!name) {
    return 'Please enter a name.';
  }
  if (name.length > maxLength) {
    return 'Too long, try a shorter name.';
  }
  if (name.length < minLength) {
    return 'Too short, try a longer name.';
  }
  if (!/^[a-z]+$/i.test(name)) {
    return 'Your name may only contain A-Z without spaces or special characters.';
  }
  return false;
};
