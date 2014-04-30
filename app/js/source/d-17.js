(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);
  }

  function getQuote(){
    var shares = $('#shares').val() * 1;
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
      var price = data.LastPrice;
      $('#top').text('Shares: '+shares);
      $('#middle').text('Price: $'+price);
      product(shares, price);
    });
  }

  function product(sh, pr){
    var position = (sh * pr).toFixed(2);
    $('#bottom').text('Position: $'+position);
  }

})();
