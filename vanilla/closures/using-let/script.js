const arr = [123, 333, 699, 555];

for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of ' + arr[i] + ' is: ' + i);
  }, 3000);
};
