export default class IdGenerator {
  constructor() {
    this.count = 0;
  }

  getNextId() {
    return this.count += 1;
  }
}