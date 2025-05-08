angular.module('app', ['ngRoute'])

.controller('controllerIndex', function($scope, $route, $routeParams, $location, $rootScope, $http){
    $scope.dados = {};
    $scope.selecao = {};
    $scope.candidato = null;

    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.init = function () {
        $scope.getDados();
    };

    $scope.getDados = function(){
        $http
            .get('./app/data.json')
            .success(function(data){
                if (data.erro)
                    exibirGritterError(data.msg);   
                else { 

                    $scope.dados = data;
                }
            }); 
    };

    $scope.getSelecao = function (obj) {
        $scope.selecao = obj; console.log(obj);
    };

    $scope.getCandidato = function (obj) {
        $scope.candidato = obj;
    };    
})

.run(['$rootScope', function($rootScope){
    
}])

.config(function($routeProvider, $locationProvider){
    
    $routeProvider
        .when('/home', {templateUrl: 'vs/home.html', controller: 'controllerHome'})
        .otherwise({ redirectTo : '/'});
});

