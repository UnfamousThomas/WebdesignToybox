function registerRoutes(app) {
    app.set('view engine', 'ejs');

    //Actual routes:
    //TODO: ADD
    //Specil route, defines all 404 errored pages as 404 pages!
    require('./routes/404errorRoute').registerRoute(app);


    console.log("All routes registered.")
}

module.exports = {
    registerRoutes: registerRoutes
};