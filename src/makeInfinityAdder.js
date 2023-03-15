'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  const adder = (application = null) => {
    if (application === null) {
      const returnValue = result;

      result = 0;

      return returnValue;
    } else {
      result += application;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
