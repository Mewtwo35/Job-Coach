export const mockData = {
  twosum: {
    startFunc: `function sum(a, b) {  } document.write(sum())`,
    testStatement: `describe('sum', function () {
      it('should return sum of arguments', function () {
        chai.expect(sum(1, 2)).to.equal(3);
      });
    });`,
    prompt:
      'Create a function "sum" that accepts two numbers and returns the sum',
  },
  fizzbuzz: {
    startFunc: `function fizzbuzz(a, b) {  } document.write(sum())`,
    testStatement: `describe('sum', function () {
      it('should return sum of arguments', function () {
        chai.expect(sum(1, 2)).to.equal(3);
      });
    });`,
    prompt: 'fizz or buzz who knows',
  },
};
