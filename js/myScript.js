const baseUrl = "https://covid19.mathdro.id/api";

let app = angular.module("MyApp", []);


app.controller("MyController", function($scope, $http){
    $scope.appTitle = "Stay Home, Stay Safe"

    console.log("App loaded");

    $http.get(baseUrl).then(function(response){
        //success
        console.log(response);
        $scope.all_data = response.data;

    }, function(error){
        //error
        console.log(error);
    });

    $scope.get_country_data = function(){
        let country = $scope.country;

        if(country == ""){
            $scope.country_data = undefined;
            return;
        }

        $http.get(`${baseUrl}/countries/${country}`).then(function(response){
            console.log(response.data);
            $scope.country_data = response.data;

        }, function(error){
            console.log(error);
        });
    };
});