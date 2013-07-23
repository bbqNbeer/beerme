// beer info model
var app = app || {};

var Beer = Backbone.Model.extend({
    defaults: {
        name: 'No name',
        desc: 'No desc',
        breweries: 'No brewery info',
        style: 'no style info'
    }
});