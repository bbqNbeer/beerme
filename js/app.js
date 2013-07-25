// application js
var beerTest = [{'name': 'beer1'},{'name': 'beer2'},{'name': 'beer13'}];
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
		  $('#content').html('');
		  query = $('#searchText').val();
		  type = $('#type:selected').val();
		  var searchItems = new BeerCollection();
		  searchItems.fetch({ 
		  	data: { q: query, ep: 'search', type: type }, 
		  	type: 'POST',
		  	success: function(data){
				//var results = JSON.stringify(data);
				// $(data).each(function(index, value){
				// 	console.log(data['models'][index]['attributes']['name']);
				// 	$('#content').append('<p>' + data['models'][index]['attributes']['name'] + ' - ' + data['models'][index]['attributes']['type'] + '</p>');
				// });
		  	}

		});

	}

	function geoLocateBreweries(latitude, longitude, radius){
		console.log('locate breweries -- lat : ' + latitude + ' lng : ' + longitude);
		$.ajax({
	    type: 'POST',
	    url: 'http://richardupdegrove.me/beer_app/brewerydb.php',
	    //data: { lat: latitude, lng: longitude, search: 'search/geo/point' },
	    data: { lat: latitude, lng: longitude, ep: 'geo' },
	    success: function(response){
	      //console.log(response);
	    }
	  });
	}

	$(function(){

		var router = new Router();
		Backbone.history.start()

		// function success(response){
		// 	console.log(response.models[0]['attributes']['data']);
		// 	 new BeerListView(response.models[0]['attributes']['data']);
		// }

		// $('#searchButton').click(function(){
		//   $('#content').html('');
		//   var query = $('#searchText').val(),
		//   	  type = $('#type').val();
		//   console.log('type: ' + type);
		//   var searchItems = new BeerCollection();
		//   searchItems.fetch({ data: { q: query, ep: 'search', type: type, wb: 'y' }, type: 'POST', success: success });		  
		// });

		// $('#locateBreweries').click(function(){
		// 	get_location();
		// 	var geoCoords = setTimeout(function(){
		// 		if(latitude !== '' && longitude !== ''){
		// 			//geoLocateBreweries(latitude, longitude, radius);
		// 			var searchItems = new BeerCollection();
		// 		    searchItems.fetch({ 
		// 			  	data: { lat: latitude, lng: longitude, radius: 100, ep: 'geo' }, 
		// 			  	type: 'POST',
		// 			  	success: function(data){
		// 			  		console.log(data);
		// 			  		$('#content').html('');
		// 					//var results = JSON.stringify(data);
		// 					$(data).each(function(index, value){
		// 						console.log(data['models'][index]['attributes']['name']);
		// 						$('#content').append('<p>' + data['models'][index]['attributes']['brewery']['name'] + ' - ' + data['models'][index]['attributes']['locality'] + ' - ' + data['models'][index]['attributes']['distance'] + ' miles away</p>');
		// 					});
		// 			  	}
		// 			});
		// 			window.clearTimeout(geoCoords);
		// 		}
		// 	},3000);
			
		// });

	});

})(jQuery);




