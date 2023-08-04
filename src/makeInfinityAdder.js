'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let memory = [];

  const result = function(num) {
    if (num === undefined) {
      if (memory.length < 1) {
        return 0;
      }

      const tempMemory = memory.reduce((sum, number) => sum + number);

      memory = [];

      return tempMemory;
    }

    memory.push(num);

    return result;
  };

  return result;
}

module.exports = makeInfinityAdder;
