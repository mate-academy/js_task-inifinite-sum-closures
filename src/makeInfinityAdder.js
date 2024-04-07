'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let RESULT = 0;
  const adder = (...args) => {
    if (args.length === 0) {
      const value = RESULT;

      RESULT = 0;

      return value;
    } else {
      RESULT += args.reduce((acc, item) => acc + item, 0);

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
