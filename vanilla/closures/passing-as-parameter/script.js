const arr = [123, 222, 550, 824];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of ' + arr[i_local] + ' is: ' + i_local);
    }
  }(i), 3000)
};
