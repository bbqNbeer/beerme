var HomeView = Backbone.View.extend({
    el: 'body',
    template: _.template( $( '#homeTemplate' ).html() ),

    initialize:function () {
        this.render();
    },
 
    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    events:{
        "click #searchButton":"search",
        "click #locateBreweries":"geoLocate",
    },

    search: function(event){
       console.log('search');
       // var searchItems = new BeerCollection();
       // new BeerListView( searchItems );

   		$('#searchList').html('');
		var query = $('#searchText').val(),
			 type = $('#type').val();
		console.log('type: ' + type);
		var searchItems = new BeerCollection();
		searchItems.fetch({ data: { q: query, ep: 'search', type: type, wb: 'y' }, type: 'POST', success: success });

		function success(response){
			console.log(response.models[0]['attributes']['data']);
			new BeerListView(response.models[0]['attributes']['data']);
		}
    },

    geoLocate: function(event){

    }
});
