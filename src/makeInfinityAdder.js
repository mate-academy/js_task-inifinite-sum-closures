'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  function adder1(arg1) {
    if (!arguments.length) {
      return 0;
    }

    let sum = arg1;

    function adder2(arg2) {
      if (!arguments.length) {
        return sum;
      }
      sum += arg2;

      return adder2;
    }

    return adder2;
  };

  return adder1;
}

module.exports = makeInfinityAdder;
