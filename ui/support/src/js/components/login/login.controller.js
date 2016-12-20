function LoginController(
  $scope,
  $state,
  $log,
  $auth) {
  'ngInject';  
  initialize(); 
  
  function initialize() {
    $scope.loginForm = {};
    $scope.loginForm.email = 'shimpiatul@hotmail.com';
    $scope.loginForm.password = 'admin1234';
  }
 
  $scope.onClickLoginBtn = function() {
    $auth.submitLogin({
      email: $scope.loginForm.email,
      password: $scope.loginForm.password
    }).then(function(res) {
    });
  };   
  
};

export {LoginController};