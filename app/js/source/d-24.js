/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeGraph();
    $('#wind').click(getZip);
  }

  function getZip(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/4044d317dac8e37e/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, function(zip){
      getWind(zip);
    });
    $('#zip').val('');
  }

  function getWind(zip){
    var wind = zip.current_observation.wind_mph;
    gaugeChart.arrows[0].setValue(wind);
    gaugeChart.axes[0].setBottomText(wind + ' m/h');
  }

  var gaugeChart;

  function makeGraph(){
    gaugeChart = AmCharts.makeChart('windSpeed', {
      'type': 'gauge',
	    'theme': 'chalk',
      'axes': [{
        'axisThickness':1,
        'axisAlpha':0.2,
        'tickAlpha':0.2,
        'valueInterval':1,
        'bands': [{
          'color': '#d511df',
          'endValue': 7,
          'startValue': 0
        }, {
          'color': '#fbff00',
          'endValue': 14,
          'startValue': 7
        }, {
          'color': '#1525e0',
          'endValue': 20,
          'innerRadius': '95%',
          'startValue': 14
        }],
      'bottomText': '0 m/h',
      'bottomTextYOffset': -20,
      'endValue': 20
      }],
      'arrows': [{}]
    });
  }

})();
