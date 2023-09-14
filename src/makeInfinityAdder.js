'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let callCount = 0;

  const adder = (a) => {
    if (typeof a !== 'number') {
      const result = callCount;

      callCount = 0;

      return result;
    };

    callCount += a;

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
