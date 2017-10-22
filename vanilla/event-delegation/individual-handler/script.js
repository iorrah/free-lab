document.addEventListener('DOMContentLoaded', function() {
  let app = document.getElementById('todo-app');
  let items = app.getElementsByClassName('item');

  for (let item of items) {
    item.addEventListener('click', function(e) {
      console.info('clicked item content: "' + e.target.innerHTML + '"');
    });
  }
});
