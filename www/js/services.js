angular.module('starter.services', [])

.factory('NewsService', function($http){
	var apiKey = {
		key:'api-key',
		value:'d306339fe10a42efb7e06e75cc68d5fb'
	};
	var NYTimes= { 
					recentNews:{
						political: "https://api.nytimes.com/svc/topstories/v2/politics.json?"+apiKey.key+"="+apiKey.value,
						national: "https://api.nytimes.com/svc/topstories/v2/national.json?"+apiKey.key+"="+apiKey.value,
						sports: "https://api.nytimes.com/svc/topstories/v2/sports.json?"+apiKey.key+"="+apiKey.value,
						movies: "https://api.nytimes.com/svc/topstories/v2/movies.json?"+apiKey.key+"="+apiKey.value,
						business: "https://api.nytimes.com/svc/topstories/v2/business.json?"+apiKey.key+"="+apiKey.value,
						health: "https://api.nytimes.com/svc/topstories/v2/health.json?"+apiKey.key+"="+apiKey.value,
						technology: "https://api.nytimes.com/svc/topstories/v2/technology.json?"+apiKey.key+"="+apiKey.value
					} 
				};


	var api = {};

	api.getPoliticalNews = function() {
		return $http.get(NYTimes.recentNews.political).success(function(response){
			return response.results;
		}).error(function(){
			return [];
		});
	};

	api.getNationalNews = function() {
		return $http.get(NYTimes.recentNews.national).success(function(response){
			return response.results;
		}).error(function(){
			return [];
		});
	};
	api.getSportsNews = function() {
		return $http.get(NYTimes.recentNews.sports).success(function(response){
			return response.results;
		}).error(function(){
			return [];
		});
	};
	api.getBusinessNews = function() {
		return $http.get(NYTimes.recentNews.business).success(function(response){
			return response.results;
		}).error(function(){
			return [];
		});
	};
	api.getHealthNews = function() {
		return $http.get(NYTimes.recentNews.health).success(function(response){
			return response.results;
		}).error(function(){
			return [];
		});
	};

	return api;
});