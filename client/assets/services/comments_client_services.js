(function(){

	'use strict'

	angular
	.module('app')
	.factory('commentsFactory', commentsFactory)
	.$inject = ['$http']

	function commentsFactory($http) {

		var factory = {};

		var user = null;

		factory.index = function(callback){
			$http.get('/topics').then(function(res){
				if(res.data) {
					callback(res);
				}
			})
			.catch(function (err) {
	          console.log(err)
	        })
		}
		
		factory.create = function(params, callback){
			$http.post('/users', params).then(function(res){
				console.log(res, "in user factory");
				if (res.status) {
       				user = res.data
		          }
		          callback(user)
		        })
		        .catch(function (err) {
		          console.log(err)
				})
		}
			



	
		return factory;
	}
})()

