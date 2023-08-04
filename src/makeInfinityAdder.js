'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let memory = 0;

  const result = function(num) {
    if (num === undefined) {
      if (memory.length < 1) {
        return 0;
      }

      const tempMemory = memory;

      memory = 0;

      return tempMemory;
    }

    memory += num;

    return result;
  };

  return result;
}

module.exports = makeInfinityAdder;
