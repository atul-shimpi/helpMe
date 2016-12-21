import styles from "../scss/app.scss";
import services from './services';
import components from './components';
import directives from './directives';
import statesAndRoutes from './states-and-routes'

var app = angular.module('weatherApp', [
  'ipCookie',
  'ngResource',
  'ui.router',
  'ngRoute', 
  'ng-token-auth',
  'ngStorage',
  services.name,
  components.name,
  directives.name
]); 

var SERVER = "http://localhost:3000";
var VER = "/api/v1";

app.constant("API", {
  "SERVER_URL": SERVER,
  "CATEGORIES": SERVER + VER + "/ticket_types",
  "USERS": SERVER + VER + "/users",
  "TICKETS": SERVER + VER + "/tickets"
})
    
app.config(statesAndRoutes);

app.factory('authHttpResponseInterceptor',['$q','$location',function($q,$location){
    return {
        response: function(response){
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function(rejection) {
            if (rejection.status === 401) {            
                console.log("Response Error 401",rejection);
                $location.path('/').search('returnTo', $location.path());
            }
            return $q.reject(rejection);
        }
    }
}])
app.config(['$httpProvider',function($httpProvider) {
    //Http Intercpetor to check auth failures for xhr requests
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
}]);
   
app.run(['$rootScope',
  '$location',
  '$auth',
  '$sessionStorage',
  function($rootScope, $location, $auth, $sessionStorage) {  
 
  
  // hightlight Tickets menu
  $rootScope.isTickets = true;  
  $rootScope.user = $sessionStorage.user || {};  
  
  // user clicked delete account menu
  $rootScope.clickDeleteAcccountBtn = function() {
    if (confirm("This will delete your account.")) {
      $auth.destroyAccount()
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
      });
    }
  };
  
  // Got account deletion success alert
  $rootScope.$on('auth:account-destroy-success', function(ev) {
    $rootScope.$emit('auth:logout-success');
  });

  // Got account deletion failure alert
  $rootScope.$on('auth:account-destroy-error', function(ev, reason) {
    alert("Account deletion failed: " + reason.errors[0]);
  });

  // User clicked Logout link
  $rootScope.onClickLogoutBtn = function() { 
    $auth.signOut()
      .then(function(resp) {
      })
      .catch(function(resp) {
      });
  };
  
  // Logout successful alert
  $rootScope.$on('auth:logout-success', function(ev) {
    delete $sessionStorage.user;
    delete $rootScope.user;
    $location.path("/");
  })   
  
}]);

export default app;