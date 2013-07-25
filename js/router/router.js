// Router
var Router = Backbone.Router.extend({
 
    routes:{
        "":"home",
        "search-list":"list"
    },

    initialize:function() {
        //$('#content').html(new HomeView().render().el);
        var homeView = new HomeView();
    },

    home: function(){
        //this.homeView = new HomeView();
    },
 
    list: function() {
        this.beerList = new BeerCollection();
        this.beerListView = new ListView({ model:this.beerList });
        var beerData = this.beerList.fetch({ data: { q: 'boulevard' } });
        $('#content').html(this.beerListView.render().el);
    }
 
});