/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeMap();
    $('#add').click(start);
  }

  function start(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/4044d317dac8e37e/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, function(zip){
      getTemp(zip);
    });
    $('#zip').val('');
  }

  // svg path for target icon
  var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';

  function getTemp(zip){
    var city = {};
    city.svgPath = targetSVG;
    city.zoomLevel = 5;
    city.scale = 0.5;
    city.title = zip.current_observation.temp_f;
    city.latitude = zip.current_observation.display_location.latitude;
    city.longitude = zip.current_observation.display_location.longitude;
    map.dataProvider.images.push(city);
    map.validateData();
  }

  var map;

  function makeMap(){
     map = AmCharts.makeChart('map', {
    	type: 'map',
        'theme': 'none',
         pathToImages: 'http://www.amcharts.com/lib/3/images/',

    	imagesSettings: {
    		rollOverColor: '#089282',
    		rollOverScale: 3,
    		selectedScale: 3,
    		selectedColor: '#089282',
    color:'#13564e'
    	},

    zoomControl:{buttonFillColor:'#15A892'},

    areasSettings:{unlistedAreasColor:'#15A892'},

  	dataProvider: {
  		map: 'worldLow',
  		images: []
	   }
     });
  }
})();
