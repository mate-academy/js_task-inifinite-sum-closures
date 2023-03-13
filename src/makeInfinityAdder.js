'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(n) {
  let result = 0;
  let zm = 0;

  const add = (value) => {
    if (value !== undefined) {
      zm += value;

      return add;
    } else {
      result = zm;
      zm = 0;

      return result;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
