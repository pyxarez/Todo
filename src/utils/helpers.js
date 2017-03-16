export function findTarget(target, storage) {
  for (var i = 0; i < storage.length; i++) {
    const storageElem = storage[i];

    if (storageElem.id === +target) {
      const returningBundle = {
        category: storageElem,
        storage,
        index: i
      }

      return returningBundle;
    } else if (storageElem.nested.length > 0) {
      const returningBundle = findTarget(target, storageElem.nested);
      if (Object.keys(returningBundle).length === 3) return returningBundle;
    }
  }

  return {};
}

export function deepClone(target) {
  return JSON.parse(JSON.stringify(target));
}

export function logger(data) {
  console.log('Info about asnync aciton response');
  console.log(data);
  console.log('---------------------------------')
}