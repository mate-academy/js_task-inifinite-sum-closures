'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;
  const adder = (...args) => {
    if (args.length === 0) {
      const value = result;

      result = 0;

      return value;
    }
    result += args.reduce((acc, item) => acc + item, 0);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
