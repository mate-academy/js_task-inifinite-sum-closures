'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let infinityArray = [];

  const result = (...args) => {
    if (args.length > 0) {
      infinityArray.push(...args);

      return result;
    } else {
      const adderResult = infinityArray.reduce((sum, item) => sum + item, 0);

      infinityArray = [];

      return adderResult;
    }
  };

  return result;
}

module.exports = makeInfinityAdder;
