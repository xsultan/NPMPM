var npmpm = require('npm-postgres-mashup');
 
npmpm.copyTheData({
    couchUrl: "https://registry.npmjs.org", // You can use this too:  https://skimdb.npmjs.com/registry
    postgresHost: 'localhost',
    postgresDatabase: 'npm',
    postgresUser: 'x21',
    postgresPassword: '',
    
    // Optional. Defaults to false 
    // Use if you want to be console.logged a lot and updated about progress 
    beNoisy: true,             
    
    // Optional. Defaults to false 
    // Use if you want to remove any npm postgres tables and start fresh 
    // Otherwise processing will pick up where you left off 
    emptyPostgres: false,

    // Use this to set a version of the database data, useful to keep the data up-to-date, if changed it will start from the beginning.
    schemaversion: 017,
    // When the number of errors reaches the limit the app will terminate
    errorLimit: 2000,

    // number of changes we will process at once 
    parallelLimit: 8,    
    
    // fires once caught up 
    onCatchup: function () {
        console.log("all caught up!");
        
        // use this to safetly stop processing the feed  
        npmpm.stopFeedAndProcessing(function () {
            console.log('stopped the feed');
            console.log('exiting now');
            process.exit(0);
        });
    }
});
