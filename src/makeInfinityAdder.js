'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(value = 0) {
  let sum = value;

  return (result) => {
    let resultValue = result;

    if (resultValue === undefined) {
      resultValue = sum;
      sum = 0;

      return resultValue;
    }

    return makeInfinityAdder(sum + resultValue);
  };
}

module.exports = makeInfinityAdder;
