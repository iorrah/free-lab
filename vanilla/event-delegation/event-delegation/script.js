document.addEventListener('DOMContentLoaded', function() {
  let app = document.getElementById('todo-app');
  
  app.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName == 'LI') {
      let item = e.target;
      console.log('the content is: "' + item.innerHTML + '"');
    }
  });
});