'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (n) => {
    if (typeof n === 'undefined') {
      const r = sum;

      sum = 0;

      return r;
    }

    if (typeof n === 'number') {
      sum += n;
    }

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
