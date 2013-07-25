var BeerListView = Backbone.View.extend({
    el: '#content',

    initialize: function( initialBeers ) {
        this.collection = new BeerCollection( initialBeers );
        this.render();
    },

    render: function() {
        this.collection.each(function( item ) {
            this.renderBeers( item );
        }, this );
    },

    renderBeers: function( item ) {
        var beersView = new BeerItemView({
            model: item
        });
        $('#searchList').append( beersView.render().el );
    }
 
});
