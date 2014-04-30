(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#btn').click(go);
  }

  function go(){
    var nums = $('#input').val().split(',').map(strip);
    var first = nums[0] * 1;
    var last = nums[1] * 1;
    makeArray(first, last);
  }

  function strip(x){
    return x.trim();
  }

  function makeArray(x, y){
    var array = [];
    for(var i = x; i <= y; i++){
      array.push(i);
    }
    var a = makePairs(array).map(div);
    $('#container').append(a);
  }

  function makePairs(x){
    var pairs = [];
    var i = 0;
    while(i < (x.length - 1)){
      var a = x.shift() * 1;
      var b = x.pop() * 1;
      var c = sum(a, b);
      pairs.push(c);
    }
    if(x.length === 1){
      var d = x.shift() * 1;
      pairs.push(d);
    }
      return pairs;
    }

  function sum(a, b){
    return a + b;
  }

  function div(x){
    return '<div>'+ x +'</div>';
  }

})();
