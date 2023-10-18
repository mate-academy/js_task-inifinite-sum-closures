'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let callArray = [];

  function adder(number) {
    if (number === undefined) {
      const sumOfCalls = callArray.length !== 0
        ? callArray.reduce((acc, cur) => acc + cur, 0)
        : 0;

      callArray = [];

      return sumOfCalls;
    } else {
      callArray.push(number);

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
