/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeGraph();
    $('#add').click(add);
  }

  function add(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/4044d317dac8e37e/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, function(zip){
    getWeather(zip);
    });
    $('#zip').val('');
  }

  function getWeather(zip){
    var weather = {};
    weather.zip = zip.current_observation.display_location.zip;
    weather.temp = zip.current_observation.temp_f;
    chart.dataProvider.push(weather);
    chart.validateData();
  }

  var chart;

  function makeGraph(){
    chart = AmCharts.makeChart('weather', {
    'type': 'serial',
    'theme': 'chalk',
    'dataProvider': [],
    'valueAxes': [{
        'gridColor':'#FFFFFF',
		'gridAlpha': 0.2,
		'dashLength': 0
    }],
    'gridAboveGraphs': true,
    'startDuration': 1,
    'graphs': [{
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillAlphas': 0.8,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'temp'
    }],
    'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
    },
    'categoryField': 'zip',
    'categoryAxis': {
        'gridPosition': 'start',
        'gridAlpha': 0
    },
	'exportConfig':{
	  'menuTop': 0,
	  'menuItems': [{
      'icon': '/lib/3/images/export.png',
      'format': 'png'
      }]
	}
  });
  }


})();
