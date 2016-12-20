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

app.config(statesAndRoutes);

app.run(['$rootScope',
  '$location',
  '$auth',
  '$sessionStorage',
  function($rootScope, $location, $auth, $sessionStorage) {
  
  $rootScope.user = $sessionStorage.user || {};
   
  // Got Login successful alert
  $rootScope.$on('auth:login-success', function(ev, user) {  
    $sessionStorage.user = user;
    $rootScope.user = $sessionStorage.user;
    $location.path('/tickets');   
  })
     
  // Got login failed alert
  $rootScope.$on('auth:login-error', function(ev, reason) {
    $rootScope.loginFailed = true;
    $rootScope.loginErr = reason.errors.join();
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