// single search item
var app = app || {};

var BeerItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'beerContainer',
    template: _.template( $( '#beerListTemplate' ).html() ),

    render: function() {
        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.toJSON() ) );

        return this;
    }
});