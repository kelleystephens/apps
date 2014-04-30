(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    var info = [];
    $.getJSON(url, function(data){
      var symbol = data.Symbol;
      var name = data.Name;
      var price = data.LastPrice;
      var outer = $('<div class="big"></div>');
      info.push(symbol, name, price);
      $(outer).append(info.map(div));
      $('#container').append(outer);
      $('div').last().addClass('red');
    });
  }

  function div(x){
    return '<div class="small">'+x+'</div>';
  }

})();
