'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function add(value) {
    if(arguments.length === 0){
      const result = sum;
      sum = 0;
      return result;
    }

    sum += value;
    return add;
  }
  return add;
}

module.exports = makeInfinityAdder;
