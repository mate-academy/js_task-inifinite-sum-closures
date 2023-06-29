'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const add = (val) =>
    val !== undefined
      ? (arg) => (arg !== undefined ? add(val + arg) : val)
      : 0;

  return add;
}

module.exports = makeInfinityAdder;
