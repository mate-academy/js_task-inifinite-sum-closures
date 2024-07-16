'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  function adder(data) {
    if (arguments.length > 1) {
      return 'Error, data isn`t single number!';
    }

    if (data === undefined) {
      const tempTotal = total;

      total = 0;

      return tempTotal;
    }

    if (!Number(data) && data !== 0) {
      return 'Error, data isn`t number!';
    } else {
      total += data;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
