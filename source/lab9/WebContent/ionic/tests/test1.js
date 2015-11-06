describe('LoginCtrl',function() {
    beforeEach(module('starter'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
            $controller=_$controller_;
    }));
    describe('login',function (){
        it('Tests login function of my controller',function() {
            var $scope = {};
            var controller = $controller('LoginCtrl', {$scope: $scope });
            var username ='user';
            var password = 'secret';
           
           expect($scope.login(username)).toEqual(true);
           
       
            
                   });
        });
    
    });