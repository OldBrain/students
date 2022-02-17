(function () {
    angular
        .module('student-front', ['ngRoute', 'ngStorage'])
        .config(config)

    function config($routeProvider) {
        $routeProvider
            .when('/create_student', {
                templateUrl: 'create_student/create_student.html',
                controller: 'createStudentController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    function run($rootScope, $http, $localStorage) {
        const contextPath = 'http://localhost:8189/api/v1';
    }

})();


angular.module('student-front').controller('indexController', function ($rootScope, $scope, $http, $localStorage, $location,$routeParams) {
    const contextPath = 'http://localhost:8189/api/v1/';

    $scope.loadStudents = function () {
        $http({
            url: contextPath + 'student',
            method: 'GET',
        }).then(function (response) {
            console.log(response.data);
            $scope.studentList = response.data;
        });
    };

    $scope.navToEditStudentPage = function (id) {
        // $routeParams {id:id}
        alert($routeParams)
        // $location.path("/create_student");
    }

    $scope.removeItem = function (id) {
        $http({
            url: contextPath + 'student/' + id,
            method: 'DELETE'
        }).then(function (response) {
            $scope.loadStudents();
        });
    };

    $scope.loadStudents();
    // $location.path("/create_student");
    // $routeParams :  {id:id}
    // alert($routeParams.get(id));
