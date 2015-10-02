describe('RegisterCtrl',function() {
    beforeEach(module('starter'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
            $controller=_$controller_;
    }));
    describe('register',function (){
        it('Tests login function of my controller',function() {
            var $scope = {};
            var controller = $controller('RegisterCtrl', {$scope: $scope });
            var email ='user';
            
           
           expect($scope.register(email)).toEqual(false);
           
       
            
                   });
        });
    
    });
