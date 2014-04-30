(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#btn').click(go);
  }

  function go(){
    var outer = $('#input').val().split('-');
    var adds = outer[0].split('+').map(strip).filter(isOdd);
    var muls = outer[1].split('*').map(strip).filter(isOdd);
    var s = sum(adds);
    var p = prd(muls);
    $('#sumDisplay').text(s);
    $('#proDisplay').text(p);
    $('input').val('');
  }

  function strip(x){
    return x.trim();
  }

  function isOdd(x){
    return x % 2;
  }

  function sum(x){
    var total = 0;
    for(var i = 0; i < x.length; i++){
      var a = x[i];
      total += (a * 1);
    }
    return total;
  }

  function prd(x){
    var total = 1;
    for(var i = 0; i < x.length; i++){
      var a = x[i];
      total *= (a * 1);
    }
    return total;
  }



})();
