const base = 'The current width of the page is: ';

var logWidth = function() {
  let log = base + window.innerWidth + 'px';
  document.getElementById('app').innerHTML = log;
};

logWidth();
window.addEventListener('resize', debounce(logWidth, 1000));
