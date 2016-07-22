(function(){
	'use strict'

	angular
		.module('app')
		.controller('questionsController', Controller)
		.$inject = ['$scope', 'questionFactory', 'userFactory', '$location']

	function Controller($scope, questionFactory, userFactory, $location) {

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

	    questionFactory.index(function(data){
	    	console.log(data.data.questions, 'this is our question')
	    	_this.questions = data.data.questions;
	    })

		_this.create = function(){
			var question = _this.newQuestion;
			question._user = _this.user.user.id;

			questionFactory.create(question, function(factory_data){
				if(factory_data){
					_this.questions = factory_data.data
					
					
				} else {
					_this.errors = factory_data.errors;
				}

			});
			$location.url('/location/')
		}

		_this.cancel = function(){
			$location.url('/')
		}

	}
})()