'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let peopleInHell = 0;

  function sendToHell(sinners) {
    const askedForGrace = arguments.length === 0;

    if (askedForGrace) {
      return freeAllSiners();
    }

    peopleInHell += sinners;

    return sendToHell;
  };

  const freeAllSiners = () => {
    const roastedInFire = peopleInHell;

    peopleInHell = 0;

    return roastedInFire;
  };

  return sendToHell;
}

module.exports = makeInfinityAdder;
