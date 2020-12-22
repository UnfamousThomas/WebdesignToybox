function registerRoute(app) {
    app.use(function (req, res, next) {
        res.status('404').render('404')
    })

    console.log("404 Error Route registered.")

}

function render404(res) {
    res.render('404')
}

module.exports = {
    registerRoute: registerRoute,
    render404: render404
};