(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#sum').click(getQuote);
  }

  function getQuote(){
    $('#input').val().split(',').map(strip).map(path).forEach(quote);
  }

  function strip(x){
    return x.trim().toUpperCase();
  }

  function path(symbol){
    return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  }

  function quote(url){
    $.getJSON(url, receive);
  }

  function receive(quote){
    var price = quote.LastPrice;
    add(price);
  }

  var total = 0;

  function add(x){
    total += x;
    total = total.toFixed(2);
    $('#display').text('$'+total);
  }

})();
