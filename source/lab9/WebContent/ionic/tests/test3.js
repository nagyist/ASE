describe('SearchCtrl',function() {
    beforeEach(module('starter'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
            $controller=_$controller_;
    }));
    describe('view',function (){
        it('Tests login function of my controller',function() {
            var $scope = {};
            var controller = $controller('SearchCtrl', {$scope: $scope });
            var mySelect=null;
            
           
           expect($scope.view(mySelect)).toEqual(false);
           
       
            
                   });
        });
    
    });