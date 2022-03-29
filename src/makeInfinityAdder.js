'use strict';

/***
 *
 * @return {function}
 *
 * Example:
```
const adder = makeAdder();
adder() === 0
adder(4)(5)() === 9
adder() === 0
adder(5)(5)(5)
adder(4)
adder() === 19
adder() === 0
 */

function makeInfinityAdder() {
  let tempSum = 0;

  const adder = (n) => {
    if (n === undefined) {
      const result = tempSum;

      tempSum = 0;

      return result;
    }

    tempSum += n;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
