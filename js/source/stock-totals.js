/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeGraph();
    $('#add').click(getSym);
  }

  function getSym(){
    var symbol = $('#sym').val().trim();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(quote){
      getQuote(quote);
    });
    $('#sym').val('');
  }

  function getQuote(quote){
    var stock = {};
    var price = quote.LastPrice;
    price = price.toFixed(2);
    stock.company = quote.Name;
    stock.quote = ($('#shares').val().trim() * 1) * price;
    $('#shares').val('');
    chart.dataProvider.push(stock);
    chart.validateData();
  }

  var chart;

  function makeGraph(){
    chart = AmCharts.makeChart('chart', {
      'type': 'pie',
	     'theme': 'chalk',
       'titles': [{
          'text': 'Stock Totals',
          'size': 30
        }],
      'dataProvider': [],
      'valueField': 'quote',
      'titleField': 'company',
      'startEffect': 'elastic',
      'startDuration': 2,
      'labelRadius': 15,
      'innerRadius': '50%',
      'depth3D': 10,
      'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
      'angle': 15,
      'exportConfig':{
        menuItems: [{
          icon: '/lib/3/images/export.png',
          format: 'png'
        }]
	    }
    });
  }

})();
