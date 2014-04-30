(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    setInterval(quote, 5000);
  }

  function quote(){
    var sym = $('#symbol').val().trim().toUpperCase();
    var url = path(sym);
    $.getJSON(url, receive);
  }

  function receive(quote){
    var sym = quote.Symbol;
    var price = quote.LastPrice;
    table(sym, price);
  }

  function path(symbol){
    return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  }

  function table(sym, pr){
    if($('td').hasClass(sym)){
      var x = $('td').hasClass(sym);
      $(x).text(pr);
    }else{
    $('tbody').append('<tr><td>'+sym+'</td><td class="'+sym+'">$'+pr+'</td></tr>');
    }
  }

})();
