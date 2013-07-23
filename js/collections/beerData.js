// beer data collection
var app = app || {};

var BeerCollection = Backbone.Collection.extend({
  model: Beer,
  url: 'brewerydb.php',
});