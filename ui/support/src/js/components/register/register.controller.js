function RegisterController(
  $scope,
  $state,
  $log,
  $auth) {
  'ngInject';  
  initialize(); 
  
  function initialize() {
    $scope.registerForm = {};
    $scope.registerForm.name = 'Atul Shimpi';
    $scope.registerForm.email = 'shimpiatul2@hotmail.com';
    $scope.registerForm.password = 'admin1234';
    $scope.registerForm.confirm_password = 'admin1234';
  }
 
  $scope.onClickRegisterBtn = function() {
    $auth.submitRegistration($scope.registerForm)
      .then(function(resp) {
        $auth.submitLogin({
          email: $scope.registerForm.email,
          password: $scope.registerForm.password
        }).then(function(res) {
        });
      })
      .catch(function(resp) {
        // handle error response
      });
  };   
  
};

export {RegisterController};