angular.module('starter.services', [])
.service('LoginService', function($q, $http) {
    return {
  loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/ase/collections/Patients?q={username:\''+name+'\'}&apiKey=ZE5gPXuMklJoxOhGZbFKK2tLg7SXx96I',
        contentType:"application/json"
        
    }).success(function(data){
   //  alert(data[0]._id.$oid);
      if (name == data[0].username && pw == data[0].password) {
                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
                 
    })
    promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
  }
            
        }})
.service('DeleteService', function($q, $http) {
    return {
        
         deleteUser:function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/ase/collections/Patients?q={username:\''+name+'\'}&apiKey=ZE5gPXuMklJoxOhGZbFKK2tLg7SXx96I',
        contentType:"application/json"
        
    }).success(function(data){
     //alert(data[0]._id.$oid);
      if (name == data[0].username && pw == data[0].password) {
         
          $http({
              method: 'DELETE' ,   
        url: 'https://api.mongolab.com/api/1/databases/ase/collections/Patients/'+data[0]._id.$oid+'?apiKey=ZE5gPXuMklJoxOhGZbFKK2tLg7SXx96I',
		 
             }).success(function (data) { 
            // alert(1);
             })
                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
                 
    })
    promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;

        }
        
    }
         })


  .service('UpdateService1', function($q, $http) {
    return {
        
         updateUser:function(oldname,newname) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/ase/collections/Patients?q={username:\''+oldname+'\'}&apiKey=ZE5gPXuMklJoxOhGZbFKK2tLg7SXx96I',
        contentType:"application/json"
        
    }).success(function(data){
  
      if (oldname == data[0].username ) {
         
          $http({
              method: 'PUT' ,   
        url: 'https://api.mongolab.com/api/1/databases/ase/collections/Patients/'+data[0]._id.$oid+'?apiKey=ZE5gPXuMklJoxOhGZbFKK2tLg7SXx96I',
		 data: JSON.stringify( { "$set" : { "username" : newname } } ),
		 
		  contentType: "application/json"
             }).success(function (data) { 
            ;
             })
                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
                 
    })
    promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;

        }
        
    }
         })

.service('UpdateService2', function($q, $http) {
    return {
        
         updatePwd:function(oldpwd,newpwd) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/ase/collections/Patients?q={password:\''+oldpwd+'\'}&apiKey=ZE5gPXuMklJoxOhGZbFKK2tLg7SXx96I',
        contentType:"application/json"
        
    }).success(function(data){
  
      if (oldpwd == data[0].password ) {
         
          $http({
              method: 'PUT' ,   
        url: 'https://api.mongolab.com/api/1/databases/ase/collections/Patients/'+data[0]._id.$oid+'?apiKey=ZE5gPXuMklJoxOhGZbFKK2tLg7SXx96I',
		 data: JSON.stringify( { "$set" : { "password" : newpwd } } ),
		 
		  contentType: "application/json"
             }).success(function (data) { 
            ;
             })
                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
                 
    })
    promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;

        }
        
    }
         })

.service('UpdateService3', function($q, $http) {
    return {
        
         updateEmail:function(oldemail,newemail) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/ase/collections/Patients?q={email:\''+oldemail+'\'}&apiKey=ZE5gPXuMklJoxOhGZbFKK2tLg7SXx96I',
        contentType:"application/json"
        
    }).success(function(data){
  
      if (oldemail == data[0].email ) {
         
          $http({
              method: 'PUT' ,   
        url: 'https://api.mongolab.com/api/1/databases/ase/collections/Patients/'+data[0]._id.$oid+'?apiKey=ZE5gPXuMklJoxOhGZbFKK2tLg7SXx96I',
		 data: JSON.stringify( { "$set" : { "email" : newemail } } ),
		 
		  contentType: "application/json"
             }).success(function (data) { 
            ;
             })
                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
                 
    })
    promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;

        }
        
    }
         })



.service('RegisterService', function($q, $http) {
    return {
        RegisterUser: function(fname, lname, address, age, email, username, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;
          $http({
        method: 'POST',
        url: 'https://api.mongolab.com/api/1/databases/ase/collections/Patients?apiKey=ZE5gPXuMklJoxOhGZbFKK2tLg7SXx96I',
        data: JSON.stringify({
       firstname: fname,
        lastname: lname,
        address: address,
        age: age,
        email: email,
        username: username,
        password: password,
    }),
        contentType:"application/json"
        
    }).success(function(data){
            
            // alert(data);
              deferred.resolve('Welcome!');
            /* if ( data[0].username != null && data[0].password != null && data[0].lastname != null && data[0].firstname != null &&data[0].email != null ) {
                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {
                deferred.reject('please fill all the fields');
            }
              */ 
    
    })
           promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
           
        }
    }
})

.service('PatientService', function($q) {
    return {
        Patient: function() {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
          
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('DoctorService', function($q) {
    return {
        Doctor: function() {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
          
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('Doctor1Service', function($q) {
    return {
        Doctor1: function() {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
          
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
;
