export const mockData = {
  twosum: {
    startFunc: `function sum(a, b) {  } sum()`,
    testStatement: `describe('sum', function () {
      it('should return sum of arguments', function () {
        chai.expect(sum(1, 2)).to.equal(3);
      });
    });`,
    prompt:
      'Create a function "sum" that accepts two numbers and returns the sum',
  },
  fizzbuzz: {
    startFunc: `function fizzbuzz(num) {  } (fizzbuzz()`,
    testStatement: `describe('fizzbuzz', function () {
      it('should work for multiples of 3 and 5', function () {
        const arr = fizzbuzz(31)
        chai.expect(arr.length).toBe(31);
        chai.expect(arr[0]).toBe(1);
        chai.expect(arr[6]).toBe(7);
      });
    });`,
    prompt: `Write a function that returns an array containing the numbers 1 to NUM.

    Put "fizz" in place of numbers divisble by 3 but not by 5,
    "buzz" in place of numbers divisble by 5 but not by 3,
    and "fizzbuzz" in place of numbers divisble by both 3 and 5.`,
  },
};
