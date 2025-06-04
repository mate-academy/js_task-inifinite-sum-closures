'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adderFunction = (args) => {
    if (args === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += args;

    return adderFunction;
  };

  return adderFunction;
}

module.exports = makeAdder;
