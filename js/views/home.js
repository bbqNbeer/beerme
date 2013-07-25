var HomeView = Backbone.View.extend({
    el: 'body',
    template: _.template($('#homeTemplate').html()),

    initialize: function() {
        this.render();
    },
 
    render: function() {
        $(this.el).html(this.template());
        return this;
    },

    events:{
        "click #searchButton":"search",
        "click #locateBreweries":"nearbyBreweries",
    },

    search: function(event){

   		$('#searchList').html('');
		var query = $('#searchText').val(),
			type = $('#type').val();

		var searchItems = new BeerCollection();
		searchItems.fetch({ 
			data: { 
				q: query, 
				ep: 'search', 
				type: type, 
				wb: 'y' 
			}, 
			type: 'GET', success: success });

		function success(response){
			new BeerListView(response.models[0]['attributes']['data']);
		}
    },

    nearbyBreweries: function(event){
    	get_location();
		var geoCoords = setTimeout(function(){
			if(latitude !== '' && longitude !== ''){
				var searchItems = new BeerCollection();
			    searchItems.fetch({ 
				  	data: { lat: latitude, lng: longitude, radius: 100, ep: 'geo' }, 
				  	type: 'GET',
				  	success: function(data){
				  		$('#searchList').html('');
						$(data).each(function(index){
							$('#searchList').append('<li class="topcoat-list__item"><p>' + data['models'][index]['attributes']['brewery']['name'] + ' - ' + data['models'][index]['attributes']['locality'] + ' - ' + data['models'][index]['attributes']['distance'] + ' miles away</p></li>');
						});
				  	}
				});
				window.clearTimeout(geoCoords);
			}
		},3000);
    }
});
