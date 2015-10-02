angular.module('starter.controllers', [])


.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
    
 
    $scope.login = function(username) {
           
        
            var un = window.localStorage['username'];
            //ert(un);
            if(username == 'user')
            {
               
               $state.go('patient');
                return true;
            }
        else
        {
           
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
             return false;
                
        }
            
    }
    $scope.signup =function()
    {
        $state.go('register');
    }
}
)
.controller('RegisterCtrl', function($scope, RegisterService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.register = function(email){
            window.localStorage['username'] = $scope.data.username;
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
            if(email.match(mailformat))
            {   
               
                var alertPopup = $ionicPopup.alert({
                title: 'Success!',
                template: 'You are successfully registered.Login to continue!'
            });
                $state.go('login');
                 return true; 
            }  
            
        else
        {
            
            var alertPopup = $ionicPopup.alert({
                title: 'Invalid email!',
                template: 'Please enter a valid format of email!'
            });
            return false;
        }
    }
})
.controller('SearchCtrl', function($scope, PatientService, $ionicPopup, $state) {
   $scope.view = function (mySelect) {
      
       
        $scope.data = {};
       
      
  var a=mySelect;
      
       if( a != null)
       {
            $state.go('doctor');
           return true;
           
          
       }
       else
       {
           
            alert("Please select an option");
           return false;
       }
}
   $scope.showSelectValue = function(mySelect) {
    alert(mySelect);
}
})
.controller('ViewCtrl', function($scope, DoctorService, $ionicPopup, $state) {
   $scope.d1 = function () {
  $state.go('doctor1');
}
   
    $scope.d2 = function () {
  $state.go('doctor1');
}
     $scope.d3 = function () {
  $state.go('doctor1');
}
   
})
.controller('ScheduleCtrl', function($scope, Doctor1Service, $ionicPopup, $state) {
   $scope.appointment= function () {
   var alertPopup = $ionicPopup.alert({
                title: 'Appointment Scheduled',
                template: 'Your appointment is scheduled successfully with Dr.Williams!'
            });
}
})
.controller('HomeCtrl', function($scope, Doctor1Service, $ionicPopup, $state) {
   $scope.go= function () {
       $state.go('login');
   }
})
;
