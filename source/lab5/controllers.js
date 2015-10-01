angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
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
            return false;
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
                
        }
            
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
                
                $state.go('login');
                return true; 
            }  
            
        else
        {
            return false;
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        };
    }
})
.controller('PatientCtrl', function($scope, PatientService, $ionicPopup, $state) {
   $scope.view = function () {
       
        $scope.data = {};
    //ert ($scope.data.mySelect.selectedIndex.value);
       if($scope.data.mySelect == 'specialization')
       {
           alert("select properly");
          
       }
       else
       {
           
   $state.go('doctor');
}
}
})
.controller('DoctorCtrl', function($scope, DoctorService, $ionicPopup, $state) {
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
.controller('Doctor1Ctrl', function($scope, Doctor1Service, $ionicPopup, $state) {
   $scope.appointment= function () {
  $state.go('login');
}
})
;
