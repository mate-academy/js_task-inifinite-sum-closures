'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accamulate = 0;

  const f = (adder = null) => {
    if (adder !== null) {
      accamulate += adder;

      return f;
    } else {
      const answer = accamulate;

      accamulate = 0;

      return answer;
    }
  };

  return f;
}

module.exports = makeInfinityAdder;
