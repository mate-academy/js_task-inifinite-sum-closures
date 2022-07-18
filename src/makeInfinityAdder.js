'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (sum) => (
    sum ? (num) => (
      num !== undefined
        ? adder(sum + num)
        : sum
    ) : 0
  );

  return adder;
}

module.exports = makeInfinityAdder;
