// Router
var Router = Backbone.Router.extend({
 
    routes:{
        "":"home",
        "search-list":"list"
    },

    initialize:function () {
        console.log('router initialized');
        //$('#content').html(new HomeView().render().el);
        var homeView = new HomeView();
    },

    home: function(){
        console.log('home route fired');
        //this.homeView = new HomeView();
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
 
});