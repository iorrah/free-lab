let debounce = (fn, delay) => {
  let timer = null;

  return function() {
  // return () => {
    let context = this;
    let args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
