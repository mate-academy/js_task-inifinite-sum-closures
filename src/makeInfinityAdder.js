'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const add = (value) => {
    const sum = (secondValue) =>
      (secondValue === undefined)
        ? value : add(value + secondValue);

    return value === undefined ? 0 : sum;
  };

  return add;
}

module.exports = makeInfinityAdder;
