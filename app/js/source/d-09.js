(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#random').click(change);
  }

  function change(){
    $('#random').css('background-color', 'rgba('+color()+','+color()+','+color()+','+opacity()+')');
  }

  function color(){
    return Math.floor(Math.random() * 256);
  }

  function opacity(){
    return Math.random().toFixed(2);
  }



})();
