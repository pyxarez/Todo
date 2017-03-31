const localStorageCaller = store => next => action => {
  console.log(localStorage);
  const result = next(action);
  return result;
}

export default localStorageCaller;