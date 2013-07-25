var BeerItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'topcoat-list__item',
    template: _.template($('#beerListTemplate').html()),

    render: function() {

        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});