'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumulate = 0;

  const f = (adder = null) => {
    if (adder !== null) {
      accumulate += adder;

      return f;
    } else {
      const answer = accumulate;

      accumulate = 0;

      return answer;
    }
  };

  return f;
}

module.exports = makeInfinityAdder;
