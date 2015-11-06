angular.module('starter.controllers', [])


.controller('LoginCtrl', function($scope, LoginService, DeleteService, UpdateService1, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function(username,password) {
        if(username == null)
        {
             var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please enter your username!'
            })
             }
         if(password == null)
        {
             var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please enter your password!'
            })
             }
        
            
         LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
           
    }
    $scope.signup =function()
    {
        $state.go('register');
    }
     $scope.delete =function(username)
    {
         DeleteService.deleteUser($scope.data.username, $scope.data.password).success(function(data) {
         var alertPopup = $ionicPopup.alert({
                title: 'Deleted!',
                template: 'Your account is deleted succesfully!'
            });
    }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Delete failed!',
                template: 'Please check your credentials!'
            });
        });
}
      $scope.update =function(username)
    {
         UpdateService1.updateUser($scope.data.username, $scope.data.password).success(function(data) {
         var alertPopup = $ionicPopup.alert({
                title: 'Updated!',
                template: 'Your details are updated succesfully!'
            });
    }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Update failed!',
                template: 'Please check your details!'
            });
        });
}
}
)
.controller('RegisterCtrl', function($scope, RegisterService, $ionicPopup, $state) {
     $scope.data = {};
 
    $scope.register = function(email){
        if($scope.data.email == null)
        {
            alert("please enter valid email id");
        }else
            if($scope.data.username == null)
            {
               alert("please enter all the fields"); 
            }else
                if($scope.data.password == null)
            {
               alert("please enter all the fields"); 
            }else
                 if($scope.data.firstname == null)
            {
               alert("please enter all the fields"); 
            }else
                if($scope.data.age == null)
            {
               alert("please enter all the fields"); 
            }else
                 if($scope.data.address == null)
            {
               alert("please enter all the fields"); 
            }
                
        else
        {
      
            RegisterService.RegisterUser($scope.data.firstname, $scope.data.lastname, $scope.data.address, $scope.data.age, $scope.data.email, $scope.data.username, $scope.data.password ).success(function(data) {
           var alertPopup = $ionicPopup.alert({
                title: 'Registration Success!',
                template: 'Login to continue!'
            });
                $state.go('login');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Registration failed!',
                template: 'Please check your details!'
            });
        });
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
.controller('ScheduleCtrl', function($scope,Doctor1Service, $ionicPopup, $state) {
   
   $scope.appointment= function () {

     if (window.confirm('Appointment Scheduled!'))
{
    $state.go('tab');
}
          
          
      
}
    $scope.View= function () {
  
       $state.go('camera');
}
})
.controller('HomeCtrl', function($scope, Doctor1Service, $ionicPopup, $state) {
   $scope.go= function () {
       $state.go('login');
   }
})
.controller('ConfirmCtrl', function($scope,Doctor1Service, $ionicPopup, $state) {
   $scope.Session= function () {
      
       $state.go('session');
   }
})
.controller('SettingsCtrl', function($scope,DeleteService, $ionicPopup, $state) {
    
     var user = User.getInstance();  
  console.log(user.fullName()); // true
  
  $scope.firstname = user.firstName;
  $scope.lastname = user.lastName;
   
   $scope.delete= function () {
      
       $state.go('delete');
   }
})
.controller('DeleteCtrl', function($scope,DeleteService, $ionicPopup, $state) {
    $scope.data = {};
    
   $scope.deleteaccount= function () {
    
       alert("Are you sure you want to delete your account? ");
       DeleteService.deleteUser(localStorage.id).success(function(data) {
         var alertPopup = $ionicPopup.alert({
                title: 'Deleted!',
                template: 'Your account is deleted succesfully!'
            });
    }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Delete failed!',
                template: 'Please check your credentials!'
            });
        });
      
   }
   
})
.controller('UpdateCtrl', function($scope, UpdateService1, UpdateService2, UpdateService3, $ionicPopup, $state) {
    
     $scope.data = {};
    $scope.showstartCard1 = false;
    $scope.showstartCard2 = false;
      $scope.showstartCard3 = false;
    $scope.hideCard1 = function() {
        $scope.showstartCard1 = true;
       // $scope.showsecondCard = true;
    };
     $scope.hideCard2 = function() {
        $scope.showstartCard2= true;
       // $scope.showsecondCard = true;
    };
     $scope.hideCard3 = function() {
        $scope.showstartCard3= true;
       // $scope.showsecondCard = true;
    };
    
   $scope.change = function(oldusername,newusername) {
       if($scope.data.oldusername == null )
        {
             var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please enter your oldusername!'
            })
             }
         else if($scope.data.newusername== null)
        {
             var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please enter your new username!'
            })
             }
       else
       {
            
    
         UpdateService1.updateUser($scope.data.oldusername,$scope.data.newusername).success(function(data) {
         var alertPopup = $ionicPopup.alert({
                title: 'Updated!',
                template: 'Your details are updated succesfully!'
            });
    }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Update failed!',
                template: 'Please check your details!'
            });
        });
}}
    $scope.change1 = function(oldpassword,newpassword) {
      
    
         UpdateService2.updatePwd($scope.data.oldpassword,$scope.data.newpassword).success(function(data) {
         var alertPopup = $ionicPopup.alert({
                title: 'Updated!',
                template: 'Your details are updated succesfully!'
            });
    }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Update failed!',
                template: 'Please check your details!'
            });
        });
}
     $scope.change2 = function(oldemail,newemail) {
      
    
         UpdateService3.updateEmail($scope.data.oldemail,$scope.data.newemail).success(function(data) {
         var alertPopup = $ionicPopup.alert({
                title: 'Updated!',
                template: 'Your details are updated succesfully!'
            });
    }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Update failed!',
                template: 'Please check your details!'
            });
        });
}
       
       
     
   }
)
.controller("ExampleCtrl", function($scope, $cordovaCamera) {

    $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
   

} )
.controller('SessionCtrl', function($scope, $cordovaCapture ,$state) {

  $scope.captureAudio = function() {
    var options = { limit: 3, duration: 10 };

    $cordovaCapture.captureAudio(options).then(function(audioData) {
      // Success! Audio data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }
  
  $scope.Image = function() {
     
    $state.go('camera');
     
  }

 
  $scope.captureVideo = function() {
    var options = { limit: 3, duration: 15 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

});
;
;
