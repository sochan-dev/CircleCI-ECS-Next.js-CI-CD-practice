import { sample } from './src/sample';

test('sample-test', () => {
  expect(sample(1, 2)).toBe(3);
});
