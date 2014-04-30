(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#btn').click(create);
    $('body').keydown(arrows);
    $(this).click(select);
  }

  function select(event){
    event.stopPropagation();
    $('div').removeClass('selected');
    $(this).addClass('selected');
  }

  var num = 0;

  function create(){
    var parentWidth = parseInt($('#container').css('width'));
    var parentHeight = parseInt($('#container').css('height'));
    var width = random();
    var height = random();
    var maxTop = parentHeight - height;
    var maxLeft = parentWidth -width;
    var rectangle = $('<div class="'+(num++)+'"></div>').css({'background-color': 'rgba(' + color() + ',' + color() + ',' + color() + ',' + opacity() + ')', 'width':width + 'px', 'height':height + 'px', 'top': boundary(maxTop) + 'px', 'left': boundary(maxLeft) + 'px'});
    $('#container').append(rectangle);
  }

  function random(){
    return Math.floor(Math.random() * 300);
  }

  function boundary(max){
    return Math.floor(Math.random() * max);
  }

  function color(){
    return Math.floor(Math.random() * 256);
  }

  function opacity(){
    return Math.random().toFixed(2);
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

})();
