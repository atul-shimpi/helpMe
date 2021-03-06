function TicketsController(
  API,
  $scope,
  $state,
  $http,
  $log) {
  'ngInject';  
  initialize(); 
  
  function initialize() {
    loadData();
  }
  
  function loadData() {
    $http.get(API.TICKETS)
    .then(gotData, fail);
  }
  
  function gotData(response) {
    $scope.tickets = response.data;
  }
  
  function fail(err) {
    
  }
};

export {TicketsController};