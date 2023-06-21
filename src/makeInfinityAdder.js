'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let arr = [];

  const getValue = (value) => {
    let num = value;

    while (num !== undefined) {
      arr.push(num);
      num++;

      return getValue;
    }

    const sum = arr.reduce((a, b) => a + b, 0);

    arr = [];

    return sum;
  };

  return getValue;
}

module.exports = makeInfinityAdder;
