export default function routeConfig($stateProvider,
                                    $urlRouterProvider,
                                    $authProvider) {
  // configure routes
  $urlRouterProvider.otherwise('/');  
	
  $stateProvider
    .state('login', {
        url: '/',
        templateUrl: 'src/views/login/login.html',
		    controller: 'LoginController'
    })
    .state('register', {
        url: '/register',
        templateUrl: 'src/views/register/register.html',
		    controller: 'RegisterController'
    })
    .state('tickets', {
        url: '/tickets',
        templateUrl: 'src/views/tickets/CRUD.html',
		    controller: 'TicketsController'
    });
      
  // configure Angular token auth  
  $authProvider.configure({
    apiUrl: 'http://localhost:3000',
    validateOnPageLoad: false,
  });
       
}; 
    
routeConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$authProvider'
];    


