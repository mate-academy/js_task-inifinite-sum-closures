'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let char = 0;

  const amout = function(num) {
    if (typeof num === 'number') {
      char += num;

      return amout;
    }

    const result = char;

    char = 0;

    return result;
  };

  return amout;
}

module.exports = makeInfinityAdder;
