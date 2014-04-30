(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#equals').click(add);
  }

  function add(){
    var x = $('#one').val() * 1;
    var y = $('#two').val() * 1;
    var total = sum(x, y);
    update(total);
  }

  function sum(a, b){
    return a + b;
  }

  function update(x){
    $('#answer').text(x);
  }

})();
