/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeChart();
    $('#btn').click(getSym);
  }

  function getSym(){
    var symbol = $('#input').val().trim();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(quote){
      getQuote(quote);
    });
    $('#input').val('');
  }

  function getQuote(quote){
    var data = {};
    data.quote = quote.LastPrice;
    data.name = quote.Name;
    data.color = 'rgba('+color()+','+color()+','+color()+','+opacity()+')';
    chart.dataProvider.push(data);
    chart.validateData();
  }

  function color(){
    return Math.floor(Math.random() * 256);
  }

  function opacity(){
    return Math.random().toFixed(2);
  }

  var chart;

  function makeChart(){
   chart = AmCharts.makeChart('chart', {
    'theme': 'chalk',
    'type': 'serial',
	  'startDuration': 2,
    'dataProvider': [],
    'valueAxes': [{
        'position': 'left',
        'title': '$'
    }],
    'graphs': [{
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'colorField': 'color',
        'fillAlphas': 1,
        'lineAlpha': 0.1,
        'type': 'column',
        'valueField': 'quote'
    }],
    'depth3D': 20,
	  'angle': 30,
    'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
    },
    'categoryField': 'name',
    'categoryAxis': {
        'gridPosition': 'start',
        'labelRotation': 90
    },
	'exportConfig':{
		'menuTop':'20px',
    'menuRight':'20px',
    'menuItems': [{
    'icon': '/lib/3/images/export.png',
    'format': 'png'
    }]
    }
});
}

})();
