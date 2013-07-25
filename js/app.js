var latitude = '',
    longitude = '',
    radius = '';

function get_location() {
	navigator.geolocation.getCurrentPosition(getCoordinates);
}

function getCoordinates(position) {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	return latitude, longitude;
}

(function($) {

	// Initialize fastclick
	FastClick.attach(document.body);

	// Initialize backbone
	var router = new Router();
	Backbone.history.start();


})(jQuery);




