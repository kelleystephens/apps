(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    createBig();
    createLittle();
    $('.bigBox').click(function(event){
      event.stopPropagation();
      addClassBig();});
    $('.littleBox').click(function(event){
      event.stopPropagation();
      addClassLittle();});
    $('body').keydown(arrows);
  }

  function addClassBig(){
    $('.littleBox').removeClass('selected');
    $('.bigBox').addClass('selected');
  }

  function addClassLittle(){
    $('.bigBox').removeClass('selected');
    $('.littleBox').addClass('selected');
  }

  function arrows(event){
    switch(event.keyCode){
    case 38:
      $('.selected').css('top', '-=5');
      break;
    case 39:
      $('.selected').css('left', '+=5');
      break;
    case 40:
      $('.selected').css('top', '+=5');
      break;
    case 37:
      $('.selected').css('left', '-=5');
    }

    if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40){
      event.preventDefault();
    }
  }

  function createBig(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var div = $('<div class="bigBox"></div>');
    var heightMax = (h - 300);
    var widthMax = (w - 300);
    div.css({left: random(widthMax), top: random(heightMax)});
    $('body').append(div);
  }

  function createLittle(){
    var w = 300;
    var h = 300;
    var div = $('<div class="littleBox"></div>');
    var heightMax = (h - 50);
    var widthMax = (w - 50);
    div.css({left: random(widthMax), top: random(heightMax)});
    $('.bigBox').append(div);
  }

  function random(x){
    return Math.floor(Math.random() * (x + 1));
  }


})();
