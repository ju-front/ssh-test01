import { add, sum, divide } from './cal';

test('adds 1 + 2 to equal 3', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

describe('add test', () => {
    // add test cases here
    const cases = [
        [1, 2, 3],
        [2, 5, 7],
        [5, 4, 9],
    ];
    test.each(cases)(
        'test case %p + %p = %p',
        (a, b, expected) => {
            expect(add(a, b)).toBe(expected);
        }
    );
});


describe('sum test', () => {
    // add test cases here
    const cases = [
        [undefined, undefined],
        [[], undefined],
        [[1], 1],
        [[1, 2], 3],
    ];
    test.each(cases)(
        'test case sum [%p] = %p',
        (nums, expected) => {
            const result = sum(nums);
            expect(result).toBe(expected);
        }
    );
});

describe('divide test', () => {
    // add test cases here
    const cases = [
        [1, 0, undefined],
        [1, 1, { quotient: 1, remainder: 0 }],
        [2, 1, { quotient: 2, remainder: 0 }],
        [3, 1, { quotient: 3, remainder: 0 }],
        [3, 2, { quotient: 1, remainder: 1 }],
        [3, 3, { quotient: 1, remainder: 0 }],
    ];
    test.each(cases)(
        'test case divide %p / %p  %p',
        (a, b, expected) => {
            const result = divide(a, b);
            expect(result).toEqual(expected);
        }
    );
});
