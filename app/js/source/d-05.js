(function(){
  'use strict';

  $(document).ready(init);

function init(){
  $('#btn').click(go);
}

function go(){
  var nums = $('#input').val().split(', ');
  var a = nums[0] * 1;
  var b = nums[1] * 1;
  var x = makeArray(a, b).map(square).filter(notOdd).map(div);
  $('#container').append(x);
}

function makeArray(x, y){
  // debugger;
  var array = [];
  for(var i = x; i <= y; i++){
    array.push(i);
  }
  return array;
}

function square(x){
  return Math.pow(x, 2);
}

function notOdd(x){
  return x % 2 === 0;
}

function div(x){
  return '<div>' + x + '</div>';
}


})();
