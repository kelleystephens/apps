(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#power').click(answer);
  }

  function answer(){
    var outer = $('#nums').val().split('-').map(strip);
    var base = outer[0].split(',').map(strip);
    var exp = outer[1].split(',').map(strip);
    getPosition(base, exp);
  }

  function strip(str){
    return str.trim();
  }

   function getPosition(a, b){
    for(var i = 0; i < a.length; i++){
      var x = a[i];
      var y = b[i];
      var z = math(x, y);
      makeDiv(x, y, z);
    }
  }

  function makeDiv(base, exponent, result){
    var x = '<div class = "big"> <div class="little">' + base + '<sup>' + exponent + '</sup> </div> <div class="little">' + result + '</div> </div>';
    $('#container').append(x);
  }

  function math(x, y){
    x *= 1;
    y *= 1;
    return Math.pow(x, y);
  }


})();
