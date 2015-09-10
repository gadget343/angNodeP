module.exports = function(app, passport) {
    app.get('/', function(req, res){
        res.render('index');
    });

    app.post('/login', function(req,res) {
    	console.log(req);
    	res.jsonp('data posted')
    })
}