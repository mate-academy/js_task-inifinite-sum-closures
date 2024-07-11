'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value === undefined) {
      return yieldAndReset();
    } else {
      return add(value);
    }
  };

  const yieldAndReset = () => {
    const result = sum;

    sum = 0;

    return result;
  };

  const add = (value) => {
    sum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
