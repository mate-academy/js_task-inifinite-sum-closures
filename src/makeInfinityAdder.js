'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  const adder = (a) => {
    if (a === undefined) {
      return 0;
    }

    let answer = a;

    return function sum(b) {
      if (b === undefined) {
        return answer;
      }

      answer += b;

      return sum;
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
