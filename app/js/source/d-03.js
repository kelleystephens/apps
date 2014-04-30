(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#fourth').click(answer);
  }

  function answer(){
    var nums = $('#nums').val().split(', ').map(trim).map(fourth).map(div);
    $('#container').append(nums);
  }

  function trim(num){
    return num.trim();
  }

  function fourth(num){
    num *= 1;
    return Math.pow(num, 4);
  }

  function div(num){
    return '<div>' + num + '</div>';
  }


})();
