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

export const validateInput = (value) =>  {
  return !!value.trim()
};

const containsOnlyNumber = (string) => string.match(/^\d+$/); 

export const toNumberKeyValues = (object) =>  {
  let newObject = {};
  
  for (let key in object) {
    if ( object.hasOwnProperty(key) && object[key] ){
      newObject[key] = containsOnlyNumber(object[key])
        ? parseInt(object[key], 10)
        : object[key];
    }
  }

  return newObject;
};

export function deepClone(target) {
  return JSON.parse(JSON.stringify(target));
}
