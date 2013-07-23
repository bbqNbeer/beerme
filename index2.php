<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
         <h1>Go ahead and find beer! PHP</h1>
         <input id="searchText" />
         <button id="searchButton">Search beers & breweries</button>
         <script type="text/template" id="item-template">
          <ul id="search-results">
          </ul>
          </script>

       <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script> -->
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.2.min.js"><\/script>')</script>
        <script src="js/vendor/mustache.js"></script>
        <script src="js/vendor/underscore-min.js"></script>
        <script src="js/vendor/backbone-min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script>

          $(function () {
            var search = 'search',
                query = 'boulevard';

            $.ajax({
              type: 'POST',
              url: 'http://richardupdegrove.me/beer_app/brewerydb.php',
              data: { q: 'boulevar' },
              success: function(response){
                //var data = $.parseJSON(response);
                console.log(data);
              }
            });
        });

		</script>
    </body>
</html>

