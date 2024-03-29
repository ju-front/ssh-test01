/**
 * a + b 를 리턴한다.  
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
export const add = (a, b) => a + b;

export const sum = (nums) => {
  if (nums === undefined) return undefined;
  if (nums.length === 0) return undefined;

  return nums.reduce((acc, row) => acc + row, 0);
};

export const divide = (a, b) => {

  if (b === 0) {
    return undefined;
  }
  return { quotient: Math.floor(a / b), remainder: a % b };
};
