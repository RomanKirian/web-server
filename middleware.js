module.exports = {
	requireAuthentication: function(req, res, next){
		console.log('Private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log(new Date().toString() + ' request: '+req.method + ' ' + req.originalUrl);
		next();
	}
};
