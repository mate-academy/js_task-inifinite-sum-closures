'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let counter = 0;

  const adder = (numb) => {
    if (numb === undefined) {
      const result = counter;

      counter = 0;

      return result;
    }
    counter += numb;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
