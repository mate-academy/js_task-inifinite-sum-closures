'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (numb) => {
    const result = sum;

    if (typeof numb !== 'number') {
      sum = 0;

      return result;
    }

    sum += numb;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
