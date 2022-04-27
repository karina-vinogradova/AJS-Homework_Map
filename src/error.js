export default class ErrorRepository {
  constructor(number, discription) {
    this.map = new Map([
      [number, discription],
    ]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
