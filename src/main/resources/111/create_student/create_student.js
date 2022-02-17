angular.module('student-front').controller('createStudentController', function ($scope, $http, $routeParams, $location, $localStorage) {
    const contextPath = 'http://localhost:8189/api/v1/';

    $scope.prepareStudentForUpdate = function () {
        alert($routeParams.id)
        // $http.get('http://localhost:8189/api/v1/student/1')
        // this.id = routeParams.get('id');
        $http.get(contextPath + 'student/'+ $routeParams.get(id))
            .then(function successCallback (response) {
                $scope.student = response.data;
                console.log(response.data);
            }, function failureCallback (response) {
                console.log(response);
                alert(response.data.msg);
                $location.path('/');
            });
    }

    $scope.updateStudent = function () {
        $http.put(contextPath + 'student',$scope.id)
            .then(function successCallback (response) {
                console.log(response);
                $scope.student = null;
                alert('Продукт успешно обновлен');
                $location.path('/');
            }, function failureCallback (response) {
                alert(response.data.msg);
            });
    }

    $scope.prepareStudentForUpdate();
});