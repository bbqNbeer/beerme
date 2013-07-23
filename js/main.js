var Beer = Backbone.Model.extend({
    defaults: {
        name: 'No name'
    }
});

var BeerCollections = Backbone.Collection.extend({
  model: Beer,
  //url: 'brewerydb.php?q=boulevard'
  url: 'http://api.brewerydb.com/v2/search/?key=06951411bd14386887542fd142d7c8d1&format=json&q=boulev'
});

var Beers = new BeerCollections();
Beers.fetch(); 

(function($) {
	$(function(){
		$('.comparebox').css('visibility', 'hidden');
		$('.comparebutton').html('');
	});
})(jQuery);

(function($) {
	var search = 'search',
	    query = 'boulevard',
	    type = 'beer',
	    latitude = '',
	    longitude = '',
	    radius = '';

	function get_location() {
  		navigator.geolocation.getCurrentPosition(getCoordinates);
	}

	function getCoordinates(position) {
		latitude = position.coords.latitude;
  		longitude = position.coords.longitude;
  		console.log('getCoords -- lat : ' + latitude + ' lng : ' + longitude);
  		return latitude, longitude;
	}

	function getBreweryDbData(){

	  $.ajax({
	    type: 'POST',
	    url: 'http://50.57.114.16/beer_app/brewerydb.php',
	    data: { search: 'search', q: query, type: type },
	    success: function(response){
	      var data = $.parseJSON(response);
	    }
	  });

	}

	function geoLocateBreweries(latitude, longitude, radius){
		console.log('locate breweries -- lat : ' + latitude + ' lng : ' + longitude);
		$.ajax({
	    type: 'POST',
	    url: 'http://50.57.114.16/beer_app/brewerydb.php',
	    //data: { lat: latitude, lng: longitude, search: 'search/geo/point' },
	    data: { lat: latitude, lng: longitude, search: 'search/geo/point' },
	    success: function(response){
	      //var data = $.parseJSON(response);
	      var data = response;
	      console.log(response);
	    }
	  });
	}

	$(function(){

		$('#searchButton').click(function(){
		  query = $('#searchText').val();
		  getBreweryDbData();
		});

		$('#locateBreweries').click(function(){
			get_location();
			var geoCoords = setTimeout(function(){
				if(latitude !== '' && longitude !== ''){
					geoLocateBreweries(latitude, longitude, radius);
					window.clearTimeout(geoCoords);
				}
			},3000);
			
		});

	});

})(jQuery);