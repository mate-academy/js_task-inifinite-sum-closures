'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(number) {
  // write code here

  let result = 0;

  let count2 = 0;

  const final = (val) => {
    let count = val;

    if (val || val === 0) {
      return (arg) => {
        if (arg || arg === 0) {
          count += arg;

          result = count;

          return final(count);
        } else {
          count2++;

          result = 0;

          return count;
        }
      };
    }

    if (count2 > 0) {
      result = 0;

      return 0;
    }

    return result;
  };

  return final;
}

module.exports = makeInfinityAdder;
