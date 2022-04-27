import ErrorRepository from '../error';

test('set error', () => {
  const error = new ErrorRepository(404, 'Not Found');
  expect(error.translate(404)).toBe('Not Found');
});

test('get "Unknown error"', () => {
  const error = new ErrorRepository(404, 'Not Found');
  expect(error.translate(1)).toBe('Unknown error');
});
