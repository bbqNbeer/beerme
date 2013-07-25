// application js

var search = 'search',
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

(function($) {

	var router = new Router();
	Backbone.history.start();


})(jQuery);




