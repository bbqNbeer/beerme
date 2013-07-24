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
       //var searchItems = new BeerCollection(beerTest);
       new BeerListView( beerTest );
    },

    geoLocate: function(event){

    }
});
