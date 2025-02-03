'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let numbers = [];

  const makeAdder = (number) => {
    if (number === undefined) {
      const result = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      );

      numbers = [];

      return result;
    }

    numbers.push(number);

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
