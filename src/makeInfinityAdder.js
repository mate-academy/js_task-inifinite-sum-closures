'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = [];

  function adder(value) {
    if (value === undefined) {
      const summa = result.reduce((total, num) => total + num, 0);

      result = [];

      return summa;
    }

    result.push(value);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
