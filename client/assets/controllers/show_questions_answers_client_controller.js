(function(){
	'use strict'

	angular
	.module('app')
	.controller('showQuestionsAnswersController', showQuestionsAnswersController)
	.$inject = ['$scope', 'questionFactory', '$routeParams', '$location', 'userFactory', 'answerFactory']

function showQuestionsAnswersController($scope, questionFactory, $routeParams, $location, userFactory, answerFactory) {

		var _this= this;

		_this.question = {};

		_this.question_id = $routeParams;

		questionFactory.show(_this.question_id, function(returned_data){
			console.log(returned_data, 'question')
			_this.question = returned_data;
		})


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

		_this.add = function(){
			var answer = _this.newAnswer;
			answer._user = _this.user.user.id;
			answer._question = _this.question_id.id;
					console.log(_this.question_id.id)
			console.log(answer)

			answerFactory.create(answer, function(factory_data){
				console.log(factory_data);
				if(factory_data.status){
					_this.answers = factory_data.data
					console.log
					$location.url('/question/:id')
					
				} else {
					_this.errors = factory_data.errors;
				}
			});
		}

	}



})()