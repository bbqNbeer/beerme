// Router
var AppRouter = Backbone.Router.extend({
 
    routes:{
        "":"",
        "search-list":"list"
    },
 
    list: function() {
        //console.log('query : ' + query);
        this.beerList = new BeerCollection();
        this.beerListView = new ListView({model:this.beerList});
        var beerData = this.beerList.fetch({data: { q: 'boulevard' }});
        $('#content').html(this.beerListView.render().el);
        console.log(this.beerList);
        console.log(beerData);
    }
 
    // wineDetails:function (id) {
    //     this.wine = this.wineList.get(id);
    //     this.wineView = new WineView({model:this.wine});
    //     $('#content').html(this.wineView.render().el);
    // }
});