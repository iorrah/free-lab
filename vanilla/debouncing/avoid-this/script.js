const EPOCH_START_DATE = new Date(0);

const debounce = (fn, delay) => {
  let lastCallDate = EPOCH_START_DATE;

  return (...args) => {
    let curDate = new Date();
    const shouldSkip = new Date() - lastCallDate < delay;

    if (shouldSkip) return;

    lastCallDate = curDate;
    return fn.apply(null, args);
  };
};
