'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let total = 0;

  const adder = (a) => {
    if (a === undefined) {
      return finish();
    }

    add(a);

    return (b) => {
      if (b === undefined) {
        return finish();
      }

      add(b);

      return adder;
    };
  };

  return adder;

  function add(num) {
    return (total += num);
  }

  function finish() {
    const result = total;

    total = 0;

    return result;
  }
}

module.exports = makeAdder;
