(function(){
	'use strict'

	angular
		.module('app')
		.controller('topicsController', Controller)
		.$inject = ['$scope', 'topicsFactory', 'userFactory', '$location']

	function Controller($scope, topicsFactory, userFactory, $location) {

		var _this = this;
		_this.user;

		activate();

		function activate () {
	      userFactory.getSession(function (data) {
	        if (data != null) {

	          _this.user = data
	        } else {
	          $location.url('/')
	        }
	      })
	    }

	    topicsFactory.index(function(data){
	    	console.log(data.data.topics, 'this is our topic')
	    	_this.topics = data.data.topics;
	    })

		_this.create = function(){
			console.log(_this.newTopic)
			var topic = _this.newTopic;
			topic._author = _this.user.user.id;

			topicsFactory.create(topic, function(factory_data){
				console.log(factory_data);
				if(factory_data.status){
					_this.messages = factory_data.data
					
				} else {
					_this.errors = factory_data.errors;
				}
			});
		}

	}
})()