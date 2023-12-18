'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (val1) => {
    if (val1 === undefined) {
      return 0;
    }

    return (val2) => {
      if (val2 === undefined) {
        return val1;
      }

      return (val3) => {
        if (val3 === undefined) {
          return val1 + val2;
        }

        return (val4) => {
          if (val4 === undefined) {
            return val1 + val2 + val3;
          }

          return (val5) => {
            if (val5 === undefined) {
              return val1 + val2 + val3 + val4;
            }

            return (val6) => {
              if (val6 === undefined) {
                return val1 + val2 + val3 + val4 + val5;
              }

              return (val7) => {
                if (val7 === undefined) {
                  return val1 + val2 + val3 + val4 + val5 + val6;
                }

                return (val8) => {
                  if (val8 === undefined) {
                    return val1 + val2 + val3 + val4 + val5 + val6 + val7;
                  }

                  return (val9) => {
                    if (val9 === undefined) {
                      return val1 + val2 + val3 + val4
                       + val5 + val6 + val7 + val8;
                    }

                    return (val10) => {
                      if (val10 === undefined) {
                        return val1 + val2 + val3 + val4
                        + val5 + val6 + val7 + val8 + val9;
                      }

                      return (val11) => {
                        if (val11 === undefined) {
                          return val1 + val2 + val3 + val4 + val5
                           + val6 + val7 + val8 + val9 + val10;
                        }

                        return val1 + val2 + val3 + val4 + val5
                         + val6 + val7 + val8 + val9 + val10 + val11;
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
