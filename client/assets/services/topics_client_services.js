(function(){

	'use strict'

	angular
	.module('app')
	.factory('topicsFactory', topicsFactory)
	.$inject = ['$http']

	function topicsFactory($http) {

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
			console.log(params)
			$http.post('/topics', params).then(function(res){
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

