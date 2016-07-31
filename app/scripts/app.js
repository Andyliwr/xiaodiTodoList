(function(angular) {
    angular.module('App', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('app', {
                url: '/app',
                templateUrl: '../index.html',
                controller: 'appController'
            })

            .state('form.profile', {
                url: '/profile',
                templateUrl: 'form-profile.html'
            })

            .state('form.interests', {
                    url: '/interests',
                    templateUrl: 'form-interests.html'
                })
                .state('app.main', {
                    url: '/main',
                    templateUrl: '../pages/main.html',
                    controller: 'mainController'
                })
                .state('app.login', {
                    url: '/login',
                    templateUrl: '../pages/login.html',
                    controller: 'loginController'
                })

            $urlRouterProvider.otherwise('/app/main');
        })
        .controller('appController', ['$scope', function($scope) {
            //在这里定义全局
        }])
        .controller('mainController', ['$scope', function($scope) {
            $scope.todoItems = [{
                content: '去医院看牙',
                done: false
            }, {
                content: '周末买衣服',
                done: false
            }, {
                content: '完成工作日报',
                done: true
            }];

            $scope.addItem = function() {
                $scope.todoItems.push({
                    content: $scope.content,
                    done: false
                });
                $scope.content = "";
            };
            $scope.removeItem = function(item) {
                var idx = $scope.todoItems.indexOf(item);
                $scope.todoItems.splice(idx, 1);
            };
        }])
        .controller('loginController', ['$scope', function($scope) {

        }]);

})(angular);