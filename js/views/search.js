// search list
var app = app || {};

var BeerListView = Backbone.View.extend({
	// template:_.template($('#beerListTemplate').html()),
	 
	// // render:function (eventName) {
	// //     $(this.el).html(this.template(this.model.toJSON()));
	// //     console.log(this.model.toJSON());
	// //     return this;
	// // }

 //    render:function (eventName) {
 //        _.each(this.model.models, function (beer) {
 //            $(this.el).append(new BeerItemView({model:beer}).render().el);
 //        }, this);
 //        return this;
 //    }

    el: '#content',

    initialize: function( initialBeers ) {
        this.collection = new BeerCollection( initialBeers );
        this.render();
    },

    // render library by rendering each book in its collection
    render: function() {
    	//console.log(this.collection);
        this.collection.each(function( item ) {
            this.renderBeers( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBeers: function( item ) {
        var beersView = new BeerItemView({
            model: item
        });
        $('#searchList').append( beersView.render().el );
    }
 
});
