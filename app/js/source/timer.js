(function(){
  'use strict';

  $(document).ready(init);

  var clock = 0;
  var timer;

  function init(){
    $('#start').click(start);
    $('#stop').click(stop);
  }

  function start(){
    timer = setInterval(updateClock, 1000);
  }

  function updateClock(){
    clock++;
    $('#display').text(clock + ' seconds');
  }

  function stop(){
    clearInterval(timer);
  }


})();
