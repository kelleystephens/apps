/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#forecast').click(getForecast);
  }

  function getForecast(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/4044d317dac8e37e/forecast10day/q/'+zip+'.json?callback=?';
    $.getJSON(url, function(zip){
      getData(zip);
      console.log(zip);
    });
  }

  function getData(zip){
    var report = zip.forecast.simpleforecast.forecastday;

    for(var i = 0; i < report.length; i++){
      var day = report[i].date.weekday;
      var icon = report[i].icon_url;
      var high = report[i].high.fahrenheit;
      var low = report[i].low.fahrenheit;
      display(icon, day, high, low);
    }
  }

  function display(icon, day, high, low){
    var weekday = '<div class="holder"><img src="'+icon+'"></img><div class="day">'+day+'</div><div class="text">H:'+high+'° L:'+low+'°</div></div>';
    $('#container').append(weekday);
  }


})();
