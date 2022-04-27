import ErrorRepository from './error';

const newError = new ErrorRepository(404, 'Not Found');
newError.translate(404);
